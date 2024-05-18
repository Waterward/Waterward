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

// -------------
// PINS
// -------------
#define ONE_WIRE_BUS 4
#define PIN_TURBIDITY_SENSOR 26
#define PIN_SWITCH_LCD 27 // see https://forum.arduino.cc/t/esp32-pins-that-support-pullup/1173356/4
#define PIN_US_TRIGGER 12
#define PIN_US_ECHO 14

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

// -------------
// Intervals
// -------------
unsigned long lastSensorsCheck = 0;  // Variable to store the last time the task1 was executed
unsigned long intervalSensorsCheck = 1000;     // Interval for task1 (in milliseconds)

unsigned long lastButtonCheck = 0;  // Variable to store the last time the task2 was executed
unsigned long intervalButtonCheck = 50;      // Interval for task2 (in milliseconds)

// -------------
// Extra Vars
// -------------
int lcdCounter = 0;

// -------------
// Code
// -------------
void setup() {
  Serial.begin(9600);

  // pinMode(PIN_SWITCH_LCD, INPUT_PULLUP);  // Set pin X as input with internal pull-up resistor
  pinMode(PIN_SWITCH_LCD, INPUT_PULLUP);  // Set pin X as input with internal pull-up resistor

  lcd.init();
  lcd.begin(16, 2);
  lcd.backlight(); // Turn on the backlight
  // lcd.print("Water Level:");
  
  // Start up the library:
  sensors.begin();
}

void loop() {

  // button check
  if (checkElapsedTime(lastButtonCheck, intervalButtonCheck)) {
    // Serial.println("Button checked");
    // Serial.print("Btn: ");
    // Serial.println(digitalRead(PIN_SWITCH_LCD));
    if (digitalRead(PIN_SWITCH_LCD) == LOW) {
      lcdCounter += 1;
      switchLCD(); // force update
    }
  }

  // sensors check
  if (checkElapsedTime(lastSensorsCheck, intervalSensorsCheck)) {
    // readTemprature();
    // Serial.println("Sensors checked");

    // last
    switchLCD();
  }

  // Add a delay to avoid rapid updates
  delay(200);
}

// Temperature Sensor
float readTemprature() {

  // Send the command for all devices on the bus to perform a temperature conversion:
  sensors.requestTemperatures();

  // Fetch the temperature in degrees Celsius for device index:
  float tempC = sensors.getTempCByIndex(0); // the index 0 refers to the first device
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

  return tempC;

  // Wait 1 second:
  // delay(1000);
}

// Level Sensor
float readLevel() {
  // Read the distance from the Ultrasonic sensor
  float distance = ultrasonic.read();
  
  // Convert distance to water level (adjust as needed)
  int waterLevel = map(distance, 0, 200, 100, 0);

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

  return String(val) + state;
}

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
  lcdWrite(0, 1, true, String(value) + " C            "); // " \xC2\xB0" + 
}

void turbidityLCD(String value) {
  lcdWrite(0, 0, true, "Turbidity:      ");
  lcdWrite(0, 1, true, String(value) + "              "); // " \xC2\xB0" + 
}

void levelLCD(int value) {
  lcdWrite(0, 0, true, "Water Level:      ");
  lcdWrite(0, 1, true, String(value) + " %            "); // " \xC2\xB0" + 
}

void conductivityLCD(int value) {
  lcdWrite(0, 0, true, "Conductivity:      ");
  lcdWrite(0, 1, true, String(value) + "              "); // " \xC2\xB0" + 
}

void switchLCD() {
  // Serial.println("Counter: " + String(lcdCounter));
  switch (lcdCounter) {
    case 0: // water level
      levelLCD(readLevel());
      break;
    case 1: // temp
      tempLCD(readTemprature());
      break;
    case 2: // turbidity
      turbidityLCD(readTurbidity());
      break;
    case 3: // conductivity
      conductivityLCD(0);
      break;
    default: // reset
      lcdCounter = 0;
      switchLCD();
      break;
  }
}

bool checkElapsedTime(unsigned long &lastCheck, unsigned long interval) {
  unsigned long currentMillis = millis();  // Get the current time
  
  if (currentMillis - lastCheck >= interval) {
    // Update the last check time
    lastCheck = currentMillis;
    
    return true;
  }
  return false;
}