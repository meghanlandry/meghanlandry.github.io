//NeoPixel Library
#include <Adafruit_NeoPixel.h>
#include <avr/power.h>
//LCD Library
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
//TaskScheduler
#include <TaskScheduler.h>
#include <TaskSchedulerDeclarations.h>
//weather sensor library
//#include <cactus_io_BME280_I2C.h> //i2c sensor
#include <dht.h>
//servo library
//#include <Servo.h>

//LCD Address
LiquidCrystal_I2C lcd(0x27, 16, 2);
//BME280_I2C bme;

//Inputs
const int resPin = A1;
const int potPin = A2;
const int dht_apin = A3;
const int button1Pin = 3;
const int button2Pin = 8;
const int button3Pin = 2;
const int servo1Pin = 10;
const int servo2Pin = 12;

dht DHT;

//Pixel
#define PIN 6
int numPixels = 1;
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(numPixels, PIN, NEO_RGB + NEO_KHZ800);

//button variables
int button1State;
int button2State;
int button3State;
int potState;
//int potValue;
int resState;
//int resValue;
float tempa;

//condition variables
int activity = 1;
int lcdMood = 0;

//misc
uint32_t randomColor; //Neopixel
int randomAnimal = 0;
int randomArt = 0;
bool pickUpCheck = false;


//TaskScheduler stuff and whatever and ugh

void t1Callback();
void t2Callback();
void t3Callback();
void t4Callback();
void t5Callback();
void t6Callback();
void t7Callback();
void t8Callback();
void t9Callback();
void t10Callback();

Task t1(100, TASK_FOREVER, &t1Callback); //home loop if idle
Task t2(100, TASK_ONCE, &t2Callback); //activity to 1
Task t3(100, TASK_FOREVER, &t3Callback); //check buttons
Task t4(1, TASK_ONCE); // empty
Task t5(100, TASK_FOREVER, &t5Callback); //printing
Task t6(1, TASK_ONCE); //empty
Task t7(1000, TASK_FOREVER, &t7Callback); //testing
Task t8(1, TASK_ONCE); //empty
Task t9(1, TASK_ONCE); //empty
Task t10(100, TASK_FOREVER, &t10Callback); //check pick up


Scheduler runner;

//****************FUNCTIONS**********************

//Animal tests
void drawCat() {
  byte one[8] = {
    B00000, B00000, B00001, B00001, B00001, B00001, B00010, B00010
  };
  byte two[8] = {
    B00000, B00000, B00000, B10000, B01000, B00111, B00000, B00000
  };
  byte three[8] = {
    B00000, B00000, B00000, B00001, B00010, B11100, B00000, B00000
  };
  byte four[8] = {
    B00000, B00000, B10000, B10000, B10000, B10000, B01000, B01000
  };
  byte five[8] = {
    B01110, B00010, B01110, B00010, B00001, B00000, B00000, B00000
  };
  byte six[8] = {
    B11100, B00100, B00000, B00010, B00001, B10000, B01111, B00000
  };
  byte seven[8] = {
    B00111, B00001, B10000, B10100, B01100, B00001, B11110, B00000
  };
  byte eight[8] = {
    B01110, B01000, B01110, B01000, B10000, B00000, B00000, B00000
  };

  lcd.createChar(0, one);
  lcd.createChar(1, two);
  lcd.createChar(2, three);
  lcd.createChar(3, four);
  lcd.createChar(4, five);
  lcd.createChar(5, six);
  lcd.createChar(6, seven);
  lcd.createChar(7, eight);
  lcd.home();

  lcd.clear();
  lcd.setCursor(6, 0);
  lcd.write(0);
  lcd.setCursor(7, 0);
  lcd.write(1);
  lcd.setCursor(8, 0);
  lcd.write(2);
  lcd.setCursor(9, 0);
  lcd.write(3);
  lcd.setCursor(6, 1);
  lcd.write(4);
  lcd.setCursor(7, 1);
  lcd.write(5);
  lcd.setCursor(8, 1);
  lcd.write(6);
  lcd.setCursor(9, 1);
  lcd.write(7);

  t7.setCallback(&t2Callback);
  t7.delay(5000);
}

void drawDog() {
  byte one[8] = {
    B00000, B00000, B00000, B00001, B00010, B00100, B01000, B01001
  };

  byte two[8] = {
    B00000, B00000, B11111, B00000, B00000, B00000, B11100, B00100
  };

  byte three[8] = {
    B00000, B00000, B11110, B00001, B00000, B00000, B01110, B00011
  };

  byte four[8] = {
    B00000, B00000, B00000, B00000, B10000, B01000, B00100, B00100
  };

  byte five[8] = {
    B00101, B00011, B00000, B00000, B00000, B00000, B00000, B00000
  };

  byte six[8] = {
    B00000, B00011, B10001, B10000, B01000, B00111, B00010, B00001
  };

  byte seven[8] = {
    B00001, B10001, B00001, B00010, B00100, B11000, B10000, B00000
  };

  byte eight[8] = {
    B01000, B10000, B00000, B00000, B00000, B00000, B00000, B00000
  };

  lcd.createChar(0, one);
  lcd.createChar(1, two);
  lcd.createChar(2, three);
  lcd.createChar(3, four);
  lcd.createChar(4, five);
  lcd.createChar(5, six);
  lcd.createChar(6, seven);
  lcd.createChar(7, eight);
  lcd.home();

  lcd.clear();
  lcd.setCursor(6, 0);
  lcd.write(0);
  lcd.setCursor(7, 0);
  lcd.write(1);
  lcd.setCursor(8, 0);
  lcd.write(2);
  lcd.setCursor(9, 0);
  lcd.write(3);
  lcd.setCursor(6, 1);
  lcd.write(4);
  lcd.setCursor(7, 1);
  lcd.write(5);
  lcd.setCursor(8, 1);
  lcd.write(6);
  lcd.setCursor(9, 1);
  lcd.write(7);

  t7.setCallback(&t2Callback);
  t7.delay(5000);
}

void drawBird() {
  byte one[8] = {
    B00000, B00000, B00100, B00110, B00101, B00100, B00010, B00001
  };

  byte two[8] = {
    B00000, B00000, B00000, B01111, B10000, B00000, B00000, B11000
  };

  byte three[8] = {
    B00000, B00000, B00000, B11100, B00011, B00000, B00000, B00111
  };

  byte four[8] = {
    B00000, B00000, B01000, B11000, B01000, B00000, B10000, B00000
  };

  byte five[8] = {
    B00100, B00101, B00101, B00100, B00010, B00001, B00000, B00000
  };

  byte six[8] = {
    B10010, B11010, B01010, B10010, B00001, B11110, B00010, B00001
  };

  byte seven[8] = {
    B10011, B10101, B10100, B10011, B00000, B11111, B10000, B00000
  };

  byte eight[8] = {
    B01000, B01000, B01000, B01000, B01000, B10000, B00000, B00000
  };

  lcd.createChar(0, one);
  lcd.createChar(1, two);
  lcd.createChar(2, three);
  lcd.createChar(3, four);
  lcd.createChar(4, five);
  lcd.createChar(5, six);
  lcd.createChar(6, seven);
  lcd.createChar(7, eight);
  lcd.home();

  lcd.clear();
  lcd.setCursor(6, 0);
  lcd.write(0);
  lcd.setCursor(7, 0);
  lcd.write(1);
  lcd.setCursor(8, 0);
  lcd.write(2);
  lcd.setCursor(9, 0);
  lcd.write(3);
  lcd.setCursor(6, 1);
  lcd.write(4);
  lcd.setCursor(7, 1);
  lcd.write(5);
  lcd.setCursor(8, 1);
  lcd.write(6);
  lcd.setCursor(9, 1);
  lcd.write(7);

  t7.setCallback(&t2Callback);
  t7.delay(5000);
}

void drawMouse() {

  byte one[8] = {
    B00000, B00000, B00111, B01000, B01001, B01000, B01000, B01010
  };

  byte two[8] = {
    B00000, B00000, B00000, B10000, B01000, B10111, B10000, B10000
  };

  byte three[8] = {
    B00000, B00000, B00011, B00100, B01001, B10010, B00100, B00000
  };

  byte four[8] = {
    B00000, B00000, B10000, B01000, B01000, B01000, B01000, B10000
  };

  byte five[8] = {
    B00010, B00001, B00001, B00000, B00011, B00000, B00011, B00000
  };

  byte six[8] = {
    B00000, B00000, B00010, B00110, B10000, B01000, B10110, B00001
  };

  byte seven[8] = {
    B00000, B00010, B00110, B00000, B00001, B10010, B01101, B10000
  };

  byte eight[8] = {
    B00000, B00100, B00000, B00000, B10000, B00000, B10000, B00000
  };

  lcd.createChar(0, one);
  lcd.createChar(1, two);
  lcd.createChar(2, three);
  lcd.createChar(3, four);
  lcd.createChar(4, five);
  lcd.createChar(5, six);
  lcd.createChar(6, seven);
  lcd.createChar(7, eight);
  lcd.home();

  lcd.clear();
  lcd.setCursor(6, 0);
  lcd.write(0);
  lcd.setCursor(7, 0);
  lcd.write(1);
  lcd.setCursor(8, 0);
  lcd.write(2);
  lcd.setCursor(9, 0);
  lcd.write(3);
  lcd.setCursor(6, 1);
  lcd.write(4);
  lcd.setCursor(7, 1);
  lcd.write(5);
  lcd.setCursor(8, 1);
  lcd.write(6);
  lcd.setCursor(9, 1);
  lcd.write(7);

  t7.setCallback(&t2Callback);
  t7.delay(5000);
}

void drawMonkey() {

  byte one[8] = {
    B00000, B00000, B00000, B00000, B00000, B00001, B00001, B00111
  };

  byte two[8] = {
    B00000, B00000, B01111, B10000, B00000, B00110, B01001, B10000
  };

  byte three[8] = {
    B00000, B00000, B11110, B00001, B00000, B01100, B10010, B00001
  };

  byte four[8] = {
    B00000, B00000, B00000, B00000, B00000, B10000, B10000, B11100
  };

  byte five[8] = {
    B00101, B00101, B00101, B00011, B00001, B00000, B00000, B00000
  };

  byte six[8] = {
    B10110, B10000, B10001, B10000, B01011, B01000, B11111, B00000
  };

  byte seven[8] = {
    B01101, B00001, B10001, B00001, B11010, B00010, B11111, B00000
  };

  byte eight[8] = {
    B10100, B10100, B10100, B11000, B10000, B00000, B00000, B00000
  };

  lcd.createChar(0, one);
  lcd.createChar(1, two);
  lcd.createChar(2, three);
  lcd.createChar(3, four);
  lcd.createChar(4, five);
  lcd.createChar(5, six);
  lcd.createChar(6, seven);
  lcd.createChar(7, eight);
  lcd.home();

  lcd.clear();
  lcd.setCursor(6, 0);
  lcd.write(0);
  lcd.setCursor(7, 0);
  lcd.write(1);
  lcd.setCursor(8, 0);
  lcd.write(2);
  lcd.setCursor(9, 0);
  lcd.write(3);
  lcd.setCursor(6, 1);
  lcd.write(4);
  lcd.setCursor(7, 1);
  lcd.write(5);
  lcd.setCursor(8, 1);
  lcd.write(6);
  lcd.setCursor(9, 1);
  lcd.write(7);

  t7.setCallback(&t2Callback);
  t7.delay(5000);
}


//intro LCD message
void homeLoop() {
  //Serial.println("Home looped.");
  lcd.clear();
  if (lcdMood == 1) {
    lcd.setCursor(0, 0);
    lcd.print(F("You expecting"));
    lcd.setCursor(0, 1);
    lcd.print(F("something?"));
  } else if (lcdMood == 3) {
    lcd.setCursor(0, 0);
    lcd.print(F("I am an LCD,"));
    lcd.setCursor(0, 1);
    lcd.print(F("nothing more."));
  } else if (lcdMood == 2) {
    lcd.setCursor(0, 0);
    lcd.print(F("Just an LCD,"));
    lcd.setCursor(0, 1);
    lcd.print(F("but hello!!"));
  }
  t1.delay(1000);
}

//check pot and set Mood
void randomLow() { // :) :|
  int randNumber = random(0, 510);
  if (randNumber > potState) {
    lcdMood = 2;
  } else {
    lcdMood = 3;
  }
}

void randomHigh() { // :| :(
  int randNumber = random(510, 1023);
  if (randNumber < potState) {
    lcdMood = 1;
  } else {
    lcdMood = 3;
  }
}

void moodCheck() {
  if (potState == 1023) {
    lcdMood = 1; // :(
  } else if (potState == 0) {
    lcdMood = 2; // :)
  } else if (potState == 510) {
    lcdMood = 3; // :|
  } else if (potState < 1023 && potState > 510) {
    randomHigh();
  } else if (potState < 510 && potState >= 0) {
    randomLow();
  }
  //delay(500);
}

//check for animal draw activity
void animalCheck() {
  randomAnimal = random(1, 6);
  lcd.clear();
  switch (randomAnimal) {
    case 1:
      drawCat();
      break;
    case 2:
      drawDog();
      break;
    case 3:
      drawBird();
      break;
    case 4:
      drawMouse();
      break;
    case 5:
      drawMonkey();
      break;
  }
}

//Neopixel Change
void newColor() {
  for (int i = 0; i < numPixels; i++) {
    //Serial.println("test");
    pixels.setPixelColor(i, pixels.Color(random(0, 255), random(0, 255), random(0, 255), 25));
    pixels.show();
    t7.setCallback(&t2Callback);
    t7.delay(5000);
  }
}

//Check and react when picked up.
void checkUpVal() {
  if (pickUpCheck == true) {
    pickedUp();
    pickUpCheck = false;
  }
}

void pickedUp() {
  //moodCheck();
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (lcdMood) {
    case 1:
      lcd.print(F("Put me down"));
      lcd.setCursor(0, 1);
      lcd.print(F("now."));
      break;
    case 3:
      lcd.print(F("You have picked"));
      lcd.setCursor(0, 1);
      lcd.print(F("me up."));
      break;
    case 2:
      lcd.print(F("Weeeeeeeeeeeee!!!"));
      break;
  }
}

//reacts to weather sensor
void chooseWeather() {
  int weatherTopic = random(1, 2);
  int temp = map(tempa, 0, 110, 1, 5);
  //int pressure = bme.getPressure_MB();
  //map(pressure, 1005, 1010, 1, 3);
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (weatherTopic) {
    case 1: //temperature
      switch (temp) {
        case 1: //very cold
          switch (lcdMood) {
            case 1: // :(
              lcd.print(F("It's too cold, just"));
              lcd.setCursor(0, 1);
              lcd.print(F("set me on fire."));
              break;
            case 3: // :|
              lcd.print(F("It is "));
              lcd.setCursor(6, 0);
              lcd.print(tempa);
              lcd.setCursor(12, 0);
              lcd.print((char)223);
              lcd.setCursor(14, 0);
              lcd.print(F("F"));
              lcd.setCursor(0, 1);
              lcd.print(F("right now."));
              break;
            case 2: // :)
              lcd.print(F("I'm cold!"));
              lcd.setCursor(0, 1);
              lcd.print(F("Hug me!"));
              break;
          }
          break;
        case 2: //cold
          switch (lcdMood) {
            case 1:
              lcd.print(F("Too cold"));
              lcd.print(F("for me."));
              break;
            case 3:
              lcd.print(F("It is "));
              lcd.setCursor(6, 0);
              lcd.print(tempa);
              lcd.setCursor(12, 0);
              lcd.print((char)223);
              lcd.setCursor(14, 0);
              lcd.print(F("F"));
              lcd.setCursor(0, 1);
              lcd.print(F("right now."));
            case 2:
              lcd.print(F("Brrrr!"));
              lcd.setCursor(0, 1);
              lcd.print(F("Little chilly!"));
              break;
          }
          break;
        case 3: //mid
          switch (lcdMood) {
            case 1:
              lcd.print(F("Must be nice to"));
              lcd.setCursor(0, 1);
              lcd.print(F("experience sun."));
              break;
            case 3:
              lcd.print(F("It is "));
              lcd.setCursor(6, 0);
              lcd.print(tempa);
              lcd.setCursor(12, 0);
              lcd.print((char)223);
              lcd.setCursor(14, 0);
              lcd.print(F("F"));
              lcd.setCursor(0, 1);
              lcd.print(F("right now."));
              break;
            case 2:
              lcd.print(F("It's a beautiful"));
              lcd.setCursor(0, 1);
              lcd.print(F("day!"));
              break;
          }
          break;
        case 4: //nice
          switch (lcdMood) {
            case 1:
              lcd.print(F("Must be nice to"));
              lcd.setCursor(0, 1);
              lcd.print(F("experience sun."));
              break;
            case 3:
              lcd.print(F("It is "));
              lcd.setCursor(6, 0);
              lcd.print(tempa);
              lcd.setCursor(12, 0);
              lcd.print((char)223);
              lcd.setCursor(14, 0);
              lcd.print(F("F"));
              lcd.setCursor(0, 1);
              lcd.print(F("right now."));
              break;
            case 2:
              lcd.print(F("It's a beautiful"));
              lcd.setCursor(0, 1);
              lcd.print(F("day!"));
              break;
          }
          break;
        case 5: //hot
          switch (lcdMood) {
            case 1:
              lcd.print(F("It's too hot."));
              break;
            case 3:
              lcd.print(F("It is "));
              lcd.setCursor(6, 0);
              lcd.print(tempa);
              lcd.setCursor(12, 0);
              lcd.print((char)223);
              lcd.setCursor(14, 0);
              lcd.print(F("F"));
              lcd.setCursor(0, 1);
              lcd.print(F("right now."));
            case 2:
              lcd.print(F("It's so hot!"));
              break;
          }
          break;
      }
      //    case 2: //pressure
      //      switch (pressure) {
      //        case 1: //rainy
      //          switch (lcdMood) {
      //            case 1:
      //              break;
      //            case 3:
      //              break;
      //            case 2:
      //              break;
      //          }
      //        case 2: //cloudy
      //          switch (lcdMood) {
      //            case 1:
      //              break;
      //            case 3:
      //              break;
      //            case 2:
      //              break;
      //          }
      //        case 3: //sunny
      //          switch (lcdMood) {
      //            case 1:
      //              break;
      //            case 3:
      //              break;
      //            case 2:
      //              break;
      //          }
  }
}



//input functions
void greenPressed() {
  moodCheck();
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (lcdMood) {
    case 1:
      switch (activity) {
        case 1: //home
          lcd.print(F("I'm just an LCD."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 2: //day
          lcd.print(F("At least you're"));
          lcd.setCursor(0, 1);
          lcd.print(F("not just an LCD."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 3: //weather
          chooseWeather();
          break;
        case 4: //neopixel
          lcd.print(F("Too bad. How"));
          lcd.setCursor(0, 1);
          lcd.print(F("about this one?"));
          newColor();
          break;
        case 5: //animals
          lcd.print(F("I don't feel"));
          lcd.setCursor(0, 1);
          lcd.print(F("like drawing."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 6: //art
          lcd.print(F("WIP    "));
          lcd.setCursor(0, 1);
          lcd.print("");
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
      }
      break;
    case 3:
      switch (activity) {
        case 1: //home
          lcd.print(F("Want to talk?"));
          lcd.setCursor(0, 1);
          lcd.print(F("White button."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 2: //day
          lcd.print(F("My day is"));
          lcd.setCursor(0, 1);
          lcd.print(F("adequate."));
          //delay(500);
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 3: //weather
          chooseWeather();
          break;
        case 4: //neopixel
          lcd.print(F("Yes, indeed."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          pixels.show();
          break;
        case 5: //animals
          lcd.print(F("Here is an"));
          lcd.setCursor(0, 1);
          lcd.print(F("animal."));
          t7.setCallback(&animalCheck); //this works
          t7.delay(1000);
          break;
        case 6: //art
          lcd.print(F("WIP"));
          lcd.setCursor(0, 1);
          lcd.print("");
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
      }
      break;
    case 2:
      switch (activity) {
        case 1: //home
          lcd.print(F("Press other"));
          lcd.setCursor(0, 1);
          lcd.print(F("buttons!"));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 2: //day
          lcd.print(F("I'm having a"));
          lcd.setCursor(0, 1);
          lcd.print(F("great day too!"));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 3: //weather
          chooseWeather();
          break;
        case 4: //neopixel
          lcd.print(F("Yay! I'll"));
          lcd.setCursor(0, 1);
          lcd.print(F("keep it."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 5: //animals
          lcd.print(F("Okay! Here's"));
          lcd.setCursor(0, 1);
          lcd.print(F("an animal!"));
          t7.setCallback(&animalCheck); //test this
          t7.delay(1000);
          break;
        case 6: //art
          lcd.print(F("WIP"));
          lcd.setCursor(0, 1);
          lcd.print(F(""));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
      }
      break;
  }
}

void redPressed() {
  moodCheck();
  lcd.clear();
  lcd.setCursor(0, 0);
  //default
  switch (lcdMood) {
    case 1:
      switch (activity) {
        case 1: //home
          lcd.print(F("Good."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 2: //day
          lcd.print(F("Well, it does"));
          lcd.setCursor(0, 1);
          lcd.print(F("for me, an LCD."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 3: //weather ***
          chooseWeather();
          break;
        case 4: //neopixel
          lcd.print(F("Good, I'll"));
          lcd.setCursor(0, 1);
          lcd.print(F("keep it."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 5: //animals
          lcd.print(F("Too bad."));
          lcd.setCursor(0, 1);
          lcd.print(F("It bites."));
          t7.setCallback(&animalCheck);
          t7.delay(1000);
          break;
        case 6: //art
          lcd.print(F("WIP"));
          lcd.setCursor(0, 1);
          lcd.print(F(""));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
      }
      break;
    case 2:
      lcd.clear();
      lcd.setCursor(0, 0);
      switch (activity) {
        case 1: //home
          lcd.print(F("Press more"));
          lcd.setCursor(0, 1);
          lcd.print(F("buttons!"));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 2: //day
          lcd.print(F("I hope your day"));
          lcd.setCursor(0, 1);
          lcd.print(F("gets better!"));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 3: //weather ***
          chooseWeather();
          break;
        case 4: //neopixel
          lcd.print(F("I'm sorry!"));
          lcd.setCursor(0, 1);
          lcd.print(F("Maybe this one?"));
          newColor();
          break;
        case 5: //animals
          lcd.print(F("Aw, okay!"));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 6: //art
          lcd.print(F("WIP"));
          lcd.setCursor(0, 1);
          lcd.print(F(""));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
      }
      break;
    case 3:
      lcd.clear();
      lcd.setCursor(0, 0);
      switch (activity) {
        case 1: //home
          lcd.print(F("Want to talk?"));
          lcd.setCursor(0, 1);
          lcd.print(F("White button."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 2: //day
          lcd.print(F("That is"));
          lcd.setCursor(0, 1);
          lcd.print(F("unfortunate."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 3: //weather ***
          chooseWeather();
          break;
        case 4: //neopixel
          lcd.print(F("Here is another "));
          lcd.setCursor(0, 1);
          lcd.print(F("color."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 5: //animals
          lcd.print(F("Ok."));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
        case 6: //art
          lcd.print(F("WIP"));
          lcd.setCursor(0, 1);
          lcd.print(F(""));
          t7.setCallback(&t2Callback);
          t7.delay(5000);
          break;
      }
      break;
  }
}

void whitePressed() {
  activity = 0;
  lcd.clear();
  pickQuestion();
  t7.setCallback(&t2Callback);
  t7.delay(5000);

}


void askDay() {
  moodCheck();
  if (lcdMood == 1) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(F("Today is awful,"));
    lcd.setCursor(0, 1);
    lcd.print(F("isn't it?"));
  } else if (lcdMood == 3) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(F("Are you having"));
    lcd.setCursor(0, 1);
    lcd.print(F("a good day?"));
  } else if (lcdMood == 2) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(F("Are you having"));
    lcd.setCursor(0, 1);
    lcd.print(F("a great day?!"));
  }
  activity = 2;
}

void askWeather() {
  moodCheck();
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (lcdMood) {
    case 1:
      lcd.print(F("How's the "));
      lcd.setCursor(0, 1);
      lcd.print(F("weather?"));
      t7.setCallback(&chooseWeather);
      t7.delay(1000);
      break;
    case 3:
      lcd.print(F("Is the weather"));
      lcd.setCursor(0, 1);
      lcd.print(F("acceptable?"));
      t7.setCallback(&chooseWeather);
      t7.delay(1000);
      break;
    case 2:
      lcd.print(F("Do you think the"));
      lcd.setCursor(0, 1);
      lcd.print(F("weather is nice?"));
      t7.setCallback(&chooseWeather);
      t7.delay(1000);
      break;
  }
  activity = 3;
}

void askPixel() {
  moodCheck();
  newColor();
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (lcdMood) {
    case 1:
      lcd.print(F("Do you like"));
      lcd.setCursor(0, 1);
      lcd.print(F("this color?"));
      break;
    case 3:
      lcd.print(F("Here is a color."));
      break;
    case 2:
      lcd.print(F("Do you like the"));
      lcd.setCursor(0, 1);
      lcd.print(F("color I picked?"));
      break;
  }
  activity = 4;
}

//Will draw animals using customChar
void askAnimal() {
  moodCheck();
  animalCheck();
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (lcdMood) {
    case 1:
      lcd.print(F("Want to see bad"));
      lcd.setCursor(0, 1);
      lcd.print(F("animal drawings?"));
      break;
    case 3:
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(F("May I show you"));
      lcd.setCursor(0, 1);
      lcd.print(F("an animal?"));
      break;
    case 2:
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(F("Want to see"));
      lcd.setCursor(0, 1);
      lcd.print(F("an animal?"));
      break;
  }
  activity = 5;
}

//will make random binary art
//Can't put strings in Byte array, way outside of scope of knowledge.
void askArt() {
  moodCheck();
  lcd.clear();
  lcd.setCursor(0, 0);
  switch (lcdMood) {
    case 1:
      lcd.print(F("I can make art."));
      lcd.setCursor(0, 1);
      lcd.print(F("Want to see?"));

      break;
    case 3:
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(F("Are you an"));
      lcd.setCursor(0, 1);
      lcd.print(F("artist?"));
      break;
    case 2:
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(F("Can I draw a"));
      lcd.setCursor(0, 1);
      lcd.print(F("picture for you?"));
      break;
  }
  activity = 6;
}

//Will use random createChar to make abstract LCD "art"
void makeArt() {
  //WIP
}

void pickQuestion() {
  int questionRandom = random(1, 5);
  switch (questionRandom) {
    case 1:
      askDay();
      break;
    case 2:
      askWeather();
      break;
    case 3:
      askPixel();
      break;
    case 4:
      askAnimal();
      break;
    case 5:
      askArt();
      break;
  }
}

void t1Callback() {
  if (activity == 1) {
    moodCheck();
    homeLoop();

  }
}

void t2Callback() {
  //Serial.println("Activity has changed");
  activity = 1;
  t7.setCallback(&t7Callback);

}
void t3Callback() {
  potState = analogRead(potPin);
  resState = analogRead(resPin);
  button1State = digitalRead(button1Pin);
  button2State = digitalRead(button2Pin);
  button3State = digitalRead(button3Pin);
  DHT.read11(dht_apin);
  tempa = ((DHT.temperature) * 1.8 + 32);

  if (button1State == HIGH) {
    redPressed();
    t3.delay(500);
  }
  if (button2State == HIGH) {
    greenPressed();
    t3.delay(500);

  } if (button3State == HIGH) {
    whitePressed();
    t3.delay(500);

  }
}


void t4Callback() {
  //spare


}
void t5Callback() {
  //  Serial.println("Mood :");
  //  Serial.print(lcdMood);
  //  Serial.println("Activity :");
  //  Serial.print(activity);


}
void t6Callback() {
  //spare
}

void t7Callback() {
  //empty for use as delay
}
void t8Callback() {
  //spare
}
void t9Callback() {
  //spare
}
void t10Callback() {
  //check if picked up
  //Serial.println(resState);

  if (resState < 100) {
    pickUpCheck = true;
    checkUpVal();
  } else {
    pickUpCheck = false;
  }
}

//************************************************

void setup() {
  Serial.begin(9600);

  //potValue = map(potState, 0, 1023, 0, 12);

  //   //temp/humidity/pressure sensor stuff
  //   if (!bme.begin()) {
  //     Serial.println("Could not find a valid BME280 sensor, check wiring!");
  //     while (1);
  //   }
  //   bme.setTempCal(-1);
  //   Serial.println("Pressure\tHumdity\t\tTemp\t\tTemp");
  //

  //TaskScheduler stuff

  runner.init();
  Serial.println("Initialized scheduler");

  runner.addTask(t1);
  Serial.println("added t1");
  runner.addTask(t2);
  Serial.println("added t2");
  runner.addTask(t3);
  Serial.println("added t3");
  runner.addTask(t4);
  Serial.println("added t4");
  runner.addTask(t5);
  Serial.println("added t5");
  runner.addTask(t6);
  Serial.println("added t6");
  runner.addTask(t7);
  Serial.println("added t7");
  runner.addTask(t8);
  Serial.println("added t8");
  runner.addTask(t9);
  Serial.println("added t9");
  runner.addTask(t10);
  Serial.println("added t10");


  t1.enable();
  Serial.println("Enabled t1");
  t2.enable();
  Serial.println("Enabled t2");
  t3.enable();
  Serial.println("Enabled t3");
  t4.enable();
  Serial.println("Enabled t4");
  t5.enable();
  Serial.println("Enabled t5");
  t6.enable();
  Serial.println("Enabled t6");
  t7.enable();
  Serial.println("Enabled t7");
  t8.enable();
  Serial.println("Enabled t8");
  t9.enable();
  Serial.println("Enabled t9");
  t10.enable();
  Serial.println("Enabled t10");




  //Random number gen
  randomSeed(analogRead(0));

  //NeoPixel Setup
  pixels.begin();
  pixels.setPixelColor( 0, pixels.Color(197, 145, 140));
  pixels.setBrightness(30);
  pixels.show();


  //LCD Setup
  lcd.begin();
  lcd.backlight();

  //Input Outputs for Pins
  pinMode(potPin, INPUT);
  pinMode(resPin, INPUT);
  pinMode(button1Pin, INPUT);
  pinMode(button2Pin, INPUT);
  pinMode(button3Pin, INPUT);
  pinMode(servo1Pin, OUTPUT);
  pinMode(servo2Pin, OUTPUT);
}

void loop() {

  //TaskScheduler
  runner.execute();
}
