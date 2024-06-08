/* Heltec Automation send communication test example
 *
 * Function:
 * 1. Send data from a esp32 device over hardware 
 *  
 * Description:
 * 
 * HelTec AutoMation, Chengdu, China
 * 成都惠利特自动化科技有限公司
 * www.heltec.org
 *
 * this project also realess in GitHub:
 * https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series
 * */

#include "LoRaWan_APP.h"
#include "Arduino.h"


#define RF_FREQUENCY 915000000  // Hz

#define TX_OUTPUT_POWER 5  // dBm

#define LORA_BANDWIDTH 0         // [0: 125 kHz, \
                                 //  1: 250 kHz, \
                                 //  2: 500 kHz, \
                                 //  3: Reserved]
#define LORA_SPREADING_FACTOR 7  // [SF7..SF12]
#define LORA_CODINGRATE 1        // [1: 4/5, \
                                 //  2: 4/6, \
                                 //  3: 4/7, \
                                 //  4: 4/8]
#define LORA_PREAMBLE_LENGTH 8   // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT 0    // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON false


#define RX_TIMEOUT_VALUE 1000
#define BUFFER_SIZE 30  // Define the payload size here

char txpacket[BUFFER_SIZE];
char rxpacket[BUFFER_SIZE];

double txNumber;
int16_t rssi, rxSize;

bool lora_idle = true;

static RadioEvents_t RadioEvents;
void OnTxDone(void);
void OnTxTimeout(void);

void setupLora() {
  // Serial.begin(115200);
  // Serial.begin(9600);
  Mcu.begin(HELTEC_BOARD, SLOW_CLK_TPYE); // if this errors with you, just update esp32 package to 3.0.1+ from Espressif

  txNumber = 0;
  rssi=0;

  RadioEvents.TxDone = OnTxDone;
  RadioEvents.TxTimeout = OnTxTimeout;
  RadioEvents.RxDone = OnRxDone;

  Radio.Init(&RadioEvents);
  Radio.SetChannel(RF_FREQUENCY);
  Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                              LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                              LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                              0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
  Radio.SetTxConfig(MODEM_LORA, TX_OUTPUT_POWER, 0, LORA_BANDWIDTH,
                    LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                    LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                    true, 0, 0, LORA_IQ_INVERSION_ON, 3000);
}



void sendLora(char* data) {
  if (lora_idle == true) {
    delay(1000);
    txNumber += 0.01;
    // sprintf(txpacket, "Hello world number %0.2f", txNumber);  //start a package
    sprintf(txpacket, data);  //start a package

    Serial.printf("\r\nsending packet \"%s\" , length %d\r\n", txpacket, strlen(txpacket));

    Radio.Send((uint8_t *)txpacket, strlen(txpacket));  //send the package out
    lora_idle = false;
  }
  Radio.IrqProcess();
}

void OnTxDone(void) {
  Serial.println("TX done......");
  lora_idle = true;
}

void OnRxDone(uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr) {
  rssi = rssi;
  rxSize = size;
  memcpy(rxpacket, payload, size);
  rxpacket[size] = '\0';
  Radio.Sleep();
  Serial.printf("\r\nreceived packet \"%s\" with rssi %d , length %d\r\n", rxpacket, rssi, rxSize);
  loraRecieved(rxpacket);
  lora_idle = true;
}

void OnTxTimeout(void) {
  Radio.Sleep();
  Serial.println("TX Timeout......");
  lora_idle = true;
}

void loraRecieved(char* data) {
  Serial.println("Data: ");
  Serial.println(data);
}














// References
// LCD: https://randomnerdtutorials.com/esp32-esp8266-i2c-lcd-arduino-ide/
// Temperature: https://www.makerguides.com/ds18b20-arduino-tutorial/
// helpful about esp32: https://www.techtonions.com/esp32-pinout-simplified-no-more-confusion-when-choosing-gpios/
// NoceMCU Esp32s Datasheet: https://docs.ai-thinker.com/_media/esp32/docs/nodemcu-32s_product_specification.pdf

/*
 On Linux, Arduino IDE may error to upload due to usb not enough permissions, in this case
 use this command `sudo chmod a+rw /dev/ttyUSB0` but change the /dev/ value to what ever the IDE says
*/

#include <LiquidCrystal_I2C.h>

#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>

#include "SECRET_VARS.h"

// -------------
// Registeration
// -------------

// wifi & mqtt
WiFiClientSecure espClient;
PubSubClient client(espClient);

// -------------
// Code
// -------------
void setup() {
  Serial.begin(115200);

  // wifi
  wifi_setup();

  // mqtt
  espClient.setCACert(MQTT_CERT);
  client.setServer(MQTT_SERVER, MQTT_PORT);
  client.setCallback(mqtt_callback);

  setupLora();
}

void loop() {
  if (!client.connected()) {
    mqtt_reconnect();
  }
  client.loop();

  if (lora_idle)
  {
    // lora_idle = false;
    Serial.println("into RX mode");
    Radio.Rx(0);
  }
  Radio.IrqProcess( );

  // mqtt

  // client.loop();
  // mqtt_subscribe();

  // Add a delay to avoid rapid updates
  delay(2000);
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

