#include <RH_ASK.h>
#include <SPI.h> // Not actually used but needed to compile

RH_ASK rf_driver;

void setup() {
  Serial.begin(9600);  // Debugging only
  if (!rf_driver.init())
    Serial.println("RF driver init failed");
}

void loop() {
  uint8_t buf[RH_ASK_MAX_MESSAGE_LEN]; // Buffer to hold incoming message
  uint8_t buflen = sizeof(buf);

  if (rf_driver.recv(buf, &buflen)) { // Non-blocking receive
    Serial.print("Received: ");
    Serial.println((char*)buf);
  }
}
