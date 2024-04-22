// #include <WiFi.h>
// #include <HTTPClient.h>
#include <SPI.h>
// #include <RF24.h>

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Ultrasonic.h>

#include "secrets.h"

// ESP32 API endpoint
const char* apiEndpoint = "http://example.com/api"


// RF24 pins
#define CE_PIN 5
#define CSN_PIN 10

// Define pins for the Ultrasonic sensor
#define trigPin 3
#define echoPin 2

// Create an Ultrasonic object
Ultrasonic ultrasonic(trigPin, echoPin);

// Set the LCD address (you may need to change this depending on your LCD module)
LiquidCrystal_I2C lcd(0x27, 16, 2);


// RF24 object
RF24 radio(CE_PIN, CSN_PIN);

// Address of the RF module
const uint64_t pipes[2] = {0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL};

void setup() {

// LCD
  lcd.begin(16, 2);
  lcd.backlight(); // Turn on the backlight
  lcd.print("Water Level:");
  
  Serial.begin(9600);
  delay(1000);

  // Initialize WiFi connection
  connectWiFi();

  // Initialize RF module
  radio.begin();
  radio.openReadingPipe(1, pipes[0]);
  radio.openReadingPipe(2, pipes[1]);
  radio.startListening();
}

void loop() {
  // Check for data from RF module
  if (radio.available()) {
    char receivedData[32] = "";
    radio.read(&receivedData, sizeof(receivedData));
    Serial.println("Received data from RF module: " + String(receivedData));

    // Process received data
    processRFData(receivedData);
  }

  // Check for data from ESP32 API
  if (checkAPI()) {
    String dataFromAPI = readFromAPI();
    Serial.println("Data received from ESP32 API: " + dataFromAPI);

    // Process data received from API
    processDataFromAPI(dataFromAPI);
  }

  delay(1000);
}

void connectWiFi() {
  Serial.println("Connecting to WiFi...");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}

bool checkAPI() {
  HTTPClient http;

  Serial.println("Checking ESP32 API...");

  http.begin(apiEndpoint);

  int httpCode = http.GET();

  if (httpCode > 0) {
    Serial.printf("[HTTP] GET... code: %d\n", httpCode);
    if (httpCode == HTTP_CODE_OK) {
      http.end();
      return true;
    }
  } else {
    Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
  }

  http.end();
  return false;
}

String readFromAPI() {
  HTTPClient http;

  Serial.println("Reading from ESP32 API...");

  http.begin(apiEndpoint);

  int httpCode = http.GET();

  if (httpCode > 0) {
    if (httpCode == HTTP_CODE_OK) {
      String payload = http.getString();
      http.end();
      return payload;
    }
  }

  http.end();
  return "";
}

void processRFData(char* data) {
  // Process RF data here
  // Example: send data to ESP32 API
}

void processDataFromAPI(String data) {
  // Process data received from ESP32 API here
  // Example: send data to RF module
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

  // Add a delay to avoid rapid updates
  delay(200);
}