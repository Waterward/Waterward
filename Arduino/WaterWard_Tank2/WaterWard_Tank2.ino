// References
// LCD: https://randomnerdtutorials.com/esp32-esp8266-i2c-lcd-arduino-ide/
// Temperature: https://www.makerguides.com/ds18b20-arduino-tutorial/
// helpful about esp32: https://www.techtonions.com/esp32-pinout-simplified-no-more-confusion-when-choosing-gpios/
// NoceMCU Esp32s Datasheet: https://docs.ai-thinker.com/_media/esp32/docs/nodemcu-32s_product_specification.pdf

/*
 On Linux, Arduino IDE may error to upload due to usb not enough permissions, in this case
 use this command `sudo chmod a+rw /dev/ttyUSB0` but change the /dev/ value to what ever the IDE says
*/

#include <Ultrasonic.h>


#include "LoRaWan_APP.h"
// #include "Arduino.h"


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
    
		// txNumber += 0.01;
		// sprintf(txpacket,"Hello world number %0.2f",txNumber);  //start a package
   

    Serial.printf("\r\nsending packet \"%s\" , length %d\r\n", txpacket, strlen(txpacket));

    Radio.Send((uint8_t *)txpacket, strlen(txpacket));  //send the package out
    // lora_idle = false;
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











#define PIN_US_TRIGGER 12
#define PIN_US_ECHO 14

// Create an Ultrasonic object
Ultrasonic ultrasonic(PIN_US_TRIGGER, PIN_US_ECHO);

// -------------
// Code
// -------------
void setup() {
  Serial.begin(115200);

  setupLora();
}

void loop() {

  char loraBuffer[30];
  float level = readLevel();

  sprintf(loraBuffer, "level-%d", level);

  sendLora(loraBuffer);

  if (lora_idle)
  {
    // lora_idle = false;
    Serial.println("into RX mode");
    Radio.Rx(0);
  }
  Radio.IrqProcess( );

  // Add a delay to avoid rapid updates
  delay(200);
}

// Level Sensor
float readLevel() {
  // Read the distance from the Ultrasonic sensor
  float distance = ultrasonic.read();

  // Convert distance to water level (adjust as needed)
  int waterLevel = map(distance, 0, 20, 100, 0);

  return waterLevel;
}
