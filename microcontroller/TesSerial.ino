// Complete Instructions: https://RandomNerdTutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/

// set pin numbers
const int buttonPin = 4;     // the number of the pushbutton pin
const int ledPin =  5;       // the number of the LED pin

// variable for storing the pushbutton status
int buttonState = 0;

void setup() {
  // initialize the pushbutton pin as an input
  pinMode(buttonPin, INPUT);
  // initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // read the state of the pushbutton value
  buttonState = digitalRead(buttonPin);
//  Serial.println(buttonState);
  // check if the pushbutton is pressed.
  // if it is, the buttonState is HIGH
  if (buttonState == HIGH) {
    // turn LED on
    digitalWrite(ledPin, HIGH);
    Serial.println("1");
  } else {
    // turn LED off
    digitalWrite(ledPin, LOW);
    Serial.println("0");
  }
  delay(1000);
}
