// References
// LCD: https://randomnerdtutorials.com/esp32-esp8266-i2c-lcd-arduino-ide/
// Temperature: https://www.makerguides.com/ds18b20-arduino-tutorial/
// helpful about esp32: https://www.techtonions.com/esp32-pinout-simplified-no-more-confusion-when-choosing-gpios/
// NoceMCU Esp32s Datasheet: https://docs.ai-thinker.com/_media/esp32/docs/nodemcu-32s_product_specification.pdf

/*
 On Linux, Arduino IDE may error to upload due to usb not enough permissions, in this case
 use this command `sudo chmod a+rw /dev/ttyUSB0` but change the /dev/ value to what ever the IDE says
*/

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Ultrasonic.h>

#include "OneWire.h"
#include "DallasTemperature.h"
#include "GravityTDS.h"

#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>

#include "SECRET_VARS.h"

// -------------
// PINS
// -------------
#define ONE_WIRE_BUS 4
#define PIN_TURBIDITY_SENSOR 35
#define PIN_SWITCH_LCD 33  // see https://forum.arduino.cc/t/esp32-pins-that-support-pullup/1173356/4
#define PIN_US_TRIGGER 12
#define PIN_US_ECHO 14
#define PIN_TDS 27
#define PIN_WATERFLOW 25
#define PIN_PH 15
#define PIN_PUMP_RELAY 5
#define PIN_VALVE_RELAY 17
#define PIN_SWITCH_PUMP_RELAY 13
#define PIN_SWITCH_VALVE_RELAY 2

// -------------
// Registeration
// -------------
// Create an Ultrasonic object
Ultrasonic ultrasonic(PIN_US_TRIGGER, PIN_US_ECHO);
// Set the LCD address (you may need to change this depending on your LCD module)
LiquidCrystal_I2C lcd(0x27, 16, 2);
// Create a new instance of the oneWire class to communicate with any OneWire device:
OneWire oneWire(ONE_WIRE_BUS);
// Pass the oneWire reference to DallasTemperature library:
DallasTemperature sensors(&oneWire);
// tds
GravityTDS gravityTds;  // https://mikroelectron.com/Product/Analog-TDS-Total-Dissolved-Solids-Sensor-Meter-for-domestic-water-hydroponic-and-other-water-quality-testing/

// -------------
// Intervals
// -------------
unsigned long lastSensorsCheck = 0;         // Variable to store the last time the task1 was executed
unsigned long intervalSensorsCheck = 1000;  // Interval for task1 (in milliseconds)

unsigned long lastButtonCheck = 0;       // Variable to store the last time the task2 was executed
unsigned long intervalButtonCheck = 50;  // Interval for task2 (in milliseconds)

// -------------
// Extra Vars
// -------------
int lcdCounter = 0;

// waterflow
int waterflowPulses = 0;
float factorConversion = 7.5;  //to convert from frequency to flow rate
float waterVolume = 0;
float waterVolumeAvg = 0;
int waterflowTime;
int waterflowDeltaTime;
// if (lcdCounter == NULL)
//   lcdCounter = 0;

// PH
float calibration_value = 21.34;

// wifi & mqtt
WiFiClientSecure espClient;
PubSubClient client(espClient);

// -------------
// Code
// -------------
void setup() {
  Serial.begin(9600);

  // pinMode(PIN_SWITCH_LCD, INPUT_PULLUP);  // Set pin X as input with internal pull-up resistor
  pinMode(PIN_SWITCH_LCD, INPUT_PULLUP);          // Set pin X as input with internal pull-up resistor
  pinMode(PIN_PH, INPUT);                         // ph
  pinMode(PIN_PUMP_RELAY, OUTPUT);                // relay
  pinMode(PIN_VALVE_RELAY, OUTPUT);               // relay
  pinMode(PIN_SWITCH_PUMP_RELAY, INPUT_PULLUP);   // relay
  pinMode(PIN_SWITCH_VALVE_RELAY, INPUT_PULLUP);  // relay

  lcd.init();
  // lcd.begin(16, 2);
  lcd.backlight();  // Turn on the backlight
  // lcd.print("Water Level:");

  // Start up the library:
  sensors.begin();

  // TDS -- Conductivity
  pinMode(PIN_TDS, INPUT);
  gravityTds.setPin(PIN_TDS);
  gravityTds.setAref(5.0);       //reference voltage on ADC, default 5.0V on Arduino UNO
  gravityTds.setAdcRange(1024);  //1024 for 10bit ADC;4096 for 12bit ADC
  gravityTds.begin();            //initialization

  // Waterflow
  pinMode(PIN_WATERFLOW, INPUT);
  attachInterrupt(digitalPinToInterrupt(PIN_WATERFLOW), incrementWaterflowCount, RISING);  //(Interrupt 0(Pin2),function,rising edge)
  waterflowTime = millis();

  // wifi
  wifi_setup();

  // mqtt
  espClient.setCACert(MQTT_CERT);
  client.setServer(MQTT_SERVER, MQTT_PORT);
  client.setCallback(mqtt_callback);
}

void loop() {
  // Serial.println(String(digitalPinToInterrupt(PIN_WATERFLOW)));

  // button check
  if (checkElapsedTime(lastButtonCheck, intervalButtonCheck)) {
    // Serial.println("Button checked");
    // Serial.print("Btn: ");
    // Serial.println(digitalRead(PIN_SWITCH_LCD));
    if (digitalRead(PIN_SWITCH_LCD) == LOW) {
      lcdCounter += 1;
      switchLCD();  // force update
    }
    if (digitalRead(PIN_SWITCH_PUMP_RELAY) == LOW) {
      togglePumpRelay(!digitalRead(PIN_PUMP_RELAY));
    }
    if (digitalRead(PIN_SWITCH_VALVE_RELAY) == LOW) {
      toggleValveRelay(!digitalRead(PIN_VALVE_RELAY));
    }
  }

  // sensors check
  if (checkElapsedTime(lastSensorsCheck, intervalSensorsCheck)) {
    // readTemperature();
    // Serial.println("Sensors checked");

    // last
    switchLCD();
  }

  // mqtt

  // client.loop();
  // mqtt_subscribe();

  // Add a delay to avoid rapid updates
  delay(200);
}

// Temperature Sensor
float readTemperature() {

  // Send the command for all devices on the bus to perform a temperature conversion:
  sensors.requestTemperatures();

  // Fetch the temperature in degrees Celsius for device index:
  float tempC = sensors.getTempCByIndex(0);  // the index 0 refers to the first device
  // Fetch the temperature in degrees Fahrenheit for device index:
  float tempF = sensors.getTempFByIndex(0);

  // Print the temperature in Celsius in the Serial Monitor:
  // Serial.print("Temperature: ");
  // Serial.print(tempC);
  // Serial.print(" \xC2\xB0"); // shows degree symbol
  // Serial.print("C  |  ");

  // Print the temperature in Fahrenheit
  // Serial.print(tempF);
  // Serial.print(" \xC2\xB0"); // shows degree symbol
  // Serial.println("F");

  mqtt_publish("temperature", String(tempC));

  return tempC;

  // Wait 1 second:
  // delay(1000);
}

// Level Sensor
float readLevel() {
  // Read the distance from the Ultrasonic sensor
  float distance = ultrasonic.read();

  // Convert distance to water level (adjust as needed)
  int waterLevel = map(distance, 0, 20, 100, 0);

  mqtt_publish("level", String(waterLevel));

  return waterLevel;
}

// Turbidity Sensor
String readTurbidity() {
  int val = analogRead(PIN_TURBIDITY_SENSOR);
  long turbidity = map(val, 0, 2800, 10, 1);

  String state;
  if (val > 1000)
    state = " (Clean)";
  else
    state = " (Dirty)";

  String message = String(val) + state;

  mqtt_publish("turbidity", String(message));

  return message;
}

float readConductivity() {
  // float temperature = readTemperature();  //add your temperature sensor and read it
  float temperature = 25.0;                   //add your temperature sensor and read it
  gravityTds.setTemperature(temperature);     // set the temperature and execute temperature compensation
  gravityTds.update();                        //sample and calculate
  // float tdsValue = gravityTds.getTdsValue();  // then get the value
  float tdsValue = analogRead(PIN_TDS);  // then get the value
  // Serial.print(tdsValue);
  // Serial.println("ppm");
  // delay(1000);
  // return analogRead(PIN_TDS);
  mqtt_publish("conductivity", String(tdsValue));
  return tdsValue;
  // return calcTDS();
}

float* readWaterflow() {
  static float returnArray[2];

  float frequency = getWaterflowFrequency();  //we obtain the frequency of the pulses in Hz
  // Serial.print();
  float flow_L_m = frequency / factorConversion;  //calculate the flow in L/m
  waterflowDeltaTime = millis() - waterflowTime;  //calculate the time variation
  waterflowTime = millis();
  // total water flow
  float diff = (flow_L_m / 60) * (waterflowDeltaTime / 1000);
  waterVolume = waterVolume + diff;  // volume(L)=flow(L/s)*time(s)
  // average water flow
  waterVolumeAvg = diff;  // volume(L)=flow(L/s)*time(s)
  Serial.println(waterVolume);
  Serial.println(waterVolumeAvg);
  returnArray[0] = waterVolume;
  returnArray[1] = waterVolumeAvg;
  mqtt_publish("waterflow", "Total: " + String(waterVolume) + ", Avg: " + String(waterVolumeAvg));
  return returnArray;
}

unsigned long timeSinceLastPhSample = 0;
unsigned long timeCheckLastPhSample = 30;
unsigned long int avgval;
int buffer_arr[10];

float getPh(float voltage) {
  return 7 + ((2.5 - voltage) / 0.18);
}

int samples = 10;
float adc_resolution = 1024.0;
float readPh() {
  int measurings = 0;
  for (int i = 0; i < samples; i++) {
    measurings += analogRead(PIN_PH);
    delay(10);
  }
  float voltage = 5 / adc_resolution * measurings / samples;
  // Serial.print("pH= ");
  // Serial.println(ph(voltage));
  float value =  getPh(voltage);
  mqtt_publish("pH", String(value));
  // return value;
  return analogRead(PIN_PH);
}
// float readPh() {
//   // sample
//   for (int i = 0; i < 10 /*&& checkElapsedTime(timeSinceLastPhSample, timeCheckLastPhSample)*/; i++) {
//     buffer_arr[i] = analogRead(PIN_PH);
//     // checkElapsedTime(timeSinceLastPhSample, timeCheckLastPhSample);
//     delay(30);
//   }

//   // sort
//   float temp;
//   for (int i = 0; i < 9; i++) {
//     for (int j = i + 1; j < 10; j++) {
//       if (buffer_arr[i] > buffer_arr[j]) {
//         temp = buffer_arr[i];
//         buffer_arr[i] = buffer_arr[j];
//         buffer_arr[j] = temp;
//       }
//     }
//   }
//   avgval = 0;
//   for (int i = 2; i < 8; i++)
//     avgval += buffer_arr[i];
//   float volt = (float)avgval * 5.0 / 1024 / 6;
//   float ph_act = -5.70 * volt + calibration_value;
//   mqtt_subscribe("pH", String(ph_act));
//   return ph_act;
// }

// -------------
// UTILITIES
// -------------
void lcdWrite(int col, int row, bool clearLine, String text) {
  lcd.setCursor(col, row);
  if (clearLine)
    lcd.print("                ");
  // lcd.clear();
  lcd.setCursor(col, row);

  lcd.println(text);
}

void tempLCD(float value) {
  lcdWrite(0, 0, true, "Temperature:      ");
  lcdWrite(0, 1, true, String(value) + " C            ");  // " \xC2\xB0" +
}

void turbidityLCD(String value) {
  lcdWrite(0, 0, true, "Turbidity:      ");
  lcdWrite(0, 1, true, String(value) + "              ");  // " \xC2\xB0" +
}

void levelLCD(int value) {
  lcdWrite(0, 0, true, "Water Level:      ");
  lcdWrite(0, 1, true, String(value) + " %            ");  // " \xC2\xB0" +
}

void conductivityLCD(int value) {
  lcdWrite(0, 0, true, "Conductivity:      ");
  lcdWrite(0, 1, true, String(value) + " ppm              ");  // " \xC2\xB0" +
}

void waterflowLCD(float totalValue, float avgValue) {
  lcdWrite(0, 0, true, "Waterflow:      ");
  lcdWrite(0, 1, true, "T " + String(totalValue) + " L, A " + String(avgValue) + "              ");  // " \xC2\xB0" +
}

void PhLCD(float value) {
  lcdWrite(0, 0, true, "pH Value:      ");
  lcdWrite(0, 1, true, String(value) + "              ");  // " \xC2\xB0" +
}

void switchLCD() {
  // Serial.println("Counter: " + String(lcdCounter));
  // test all
  // readLevel();
  // delay(10);
  // readTemperature();
  // delay(10);
  // readTurbidity();
  // delay(10);
  // readConductivity();
  // delay(10);
  // readWaterflow();
  // delay(10);
  // readPh();
  // delay(10);
  
  switch (lcdCounter) {
    case 0:  // water level
      levelLCD(readLevel());
      break;
    case 1:  // temp
      tempLCD(readTemperature());
      break;
    case 2:  // turbidity
      turbidityLCD(readTurbidity());
      break;
    case 3:  // conductivity
      conductivityLCD(readConductivity());
      break;
    case 4:
      {  // waterflow
        float* theArray = readWaterflow();
        float value[2] = { *theArray, *(theArray + 1) };
        waterflowLCD(value[0], value[1]);
        // Serial.println("waterflow..");
        // waterflowLCD(readConductivity());
        break;
      }
    case 5:  // pH
      PhLCD(readPh());
      break;
    default:  // reset
      lcdCounter = 0;
      switchLCD();
      break;
  }
}

bool checkElapsedTime(unsigned long& lastCheck, unsigned long interval) {
  unsigned long currentMillis = millis();  // Get the current time

  if (currentMillis - lastCheck >= interval) {
    // Update the last check time
    lastCheck = currentMillis;

    return true;
  }
  return false;
}

void incrementWaterflowCount() {
  waterflowPulses++;  //increment the pulse variable
}

unsigned long timeSinceLastWaterflowCheck = 0;
int getWaterflowFrequency() {
  int frequency;
  // Serial.println("pulses before: " + String(waterflowPulses));
  waterflowPulses = 0;  // reset
  // delay(1000);
  // interrupts();     // We enable the interruptions
  delay(500);
  // if (checkElapsedTime(timeSinceLastWaterflowCheck, 1000)) {}   //sample for 1 second
  // noInterrupts();  // We disable the interruptions
  // Serial.println("pulses after: " + String(waterflowPulses));
  frequency = waterflowPulses;  //Hz(pulses per second)
  return frequency;
}

// -------------------- FUNCTIONS

void togglePumpRelay(bool value) {
  digitalWrite(PIN_PUMP_RELAY, value);
}
void toggleValveRelay(bool value) {
  digitalWrite(PIN_VALVE_RELAY, value);
}

bool stringToBool(String str) {
  str.toLowerCase(); // Convert the string to lower case for case-insensitive comparison
  str.trim(); // Remove any leading or trailing whitespace

  if (str == "true" || str == "1" || str == "yes") {
    return true;
  } else if (str == "false" || str == "0" || str == "no") {
    return false;
  } else {
    // Optionally, handle invalid input
    Serial.println("Invalid input for boolean conversion.");
    return false; // Default value for invalid input
  }
}

void wifi_setup() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(WIFI_SSID);

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void mqtt_callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  String result = "";
  for (int i = 0; i < length; i++) {
    result += (char)payload[i];
  }
  Serial.println(result);

  checkRelays(String(topic), stringToBool(result));
}

void mqtt_reconnect() {
  // Loop until we’re reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection… ");
    String clientId = "ESP32Client";
    // Attempt to connect
    if (client.connect(clientId.c_str(), MQTT_USERNAME, MQTT_PASS)) {
      Serial.println("connected!");
      // Once connected, publish an announcement…
      client.publish(MQTT_PUB_TOPIC, "Hello, I am Connected");
      // … and resubscribe
      client.subscribe(MQTT_SUB_TOPIC);
      client.subscribe("waterward/ayham/hub/togglepump");
      client.subscribe("waterward/ayham/hub/togglevalve");
      // client.subscribe("#");
      // client.subscribe(MQTT_SUB_TOPIC);
    } else {
      Serial.print("failed, rc = ");
      Serial.print(client.state());
      Serial.println("try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(1000);
    }
  }
}

long lastMqttMsg = 0;
void mqtt_publish(String topic, String message) {
  if (!client.connected()) {
    mqtt_reconnect();
  }
  client.loop();

  unsigned long now = millis();
  if (now - lastMqttMsg > 1000) {
    // lastMqttMsg = now;

    // char topic[256]; // Buffer for the final topic string
    // String message = "Hello World! #" + String(value);
    String newTopic = String(MQTT_PUB_TOPIC) + String("/") + topic;
    // String topic = mainTopic.concat("/").concat(topic);
    // sprintf(topic, "%s/%s", MQTT_PUB_TOPIC, sub_topic); // Concatenate using sprintf
    // String topic = "Asdasd";
    client.publish(newTopic.c_str(), message.c_str());
    Serial.print("Publish message: ");
    Serial.println(message);
    // delay(50);
    // lastMqttMsg = now;
  }
}

void checkRelays(String topic, bool value) {
  if (topic.endsWith("togglepump"))
    togglePumpRelay(value);

  if (topic.endsWith("togglevalve"))
    toggleValveRelay(value);
}