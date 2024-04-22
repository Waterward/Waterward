#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Ultrasonic.h>
#include <RH_RF95.h>

// LoRa settings
#define BAND 915E6 // You might need to adjust this depending on your region
RH_RF95 rf95;

// Define pins for the Ultrasonic sensor
#define trigPin 3
#define echoPin 2

// Create an Ultrasonic object
Ultrasonic ultrasonic(trigPin, echoPin);

// Set the LCD address (you may need to change this depending on your LCD module)
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  // LCD
  lcd.begin(16, 2);
  lcd.backlight();  // Turn on the backlight
  lcd.print("Water Level:");

  Serial.begin(9600);
  delay(1000);

  // Initialize LoRa module
  if (!rf95.init()) {
    Serial.println("LoRa initialization failed!");
    while (1);
  }

  // Set frequency
  if (!rf95.setFrequency(BAND)) {
    Serial.println("Set frequency failed!");
    while (1);
  }

  Serial.println("LoRa initialized");

  // Initialize LoRa receive method
  rf95.setModemConfig(RH_RF95::Bw125Cr45Sf128); // LoRa modulation parameters
  rf95.setFrequency(BAND); // Set LoRa frequency
  rf95.setThisAddress(1); // Set device address
  rf95.setHeaderFrom(1); // Address from which to accept headers
  rf95.setPromiscuous(false); // Disable promiscuous mode
}

void loop() {
  // Check for data from LoRa module
  receiveLoRaData();

  // Update the LCD with water level
  updateLCD();

  // Transmit water level via LoRa
  transmitWaterLevel();

  delay(1000);
}

void receiveLoRaData() {
  if (rf95.available()) {
    uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
    uint8_t len = sizeof(buf);
    if (rf95.recv(buf, &len)) {
      Serial.print("Received LoRa message: ");
      Serial.println((char*)buf);
      // Process received data if needed
    }
  }
}

void updateLCD() {
  // Read the distance from the Ultrasonic sensor
  float distance = ultrasonic.read();

  // Convert distance to water level (adjust as needed)
  int waterLevel = map(distance, 0, 200, 100, 0);

  // Display water level on Serial Monitor
  Serial.print("Water Level: ");
  Serial.println(waterLevel);

  // Display water level on LCD
  lcd.setCursor(0, 1);
  lcd.print("                ");  // Clear the previous value
  lcd.setCursor(0, 1);
  lcd.print(waterLevel);
}

void transmitWaterLevel() {
  // Read the distance from the Ultrasonic sensor
  float distance = ultrasonic.read();

  // Convert distance to water level (adjust as needed)
  int waterLevel = map(distance, 0, 200, 100, 0);

  // Transmit water level via LoRa
  rf95.send((uint8_t*)&waterLevel, sizeof(waterLevel));
  rf95.waitPacketSent();
  Serial.println("Water level transmitted via LoRa");
}
