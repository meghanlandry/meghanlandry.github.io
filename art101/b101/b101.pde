int drawType;
int imageSize = 3;
int windowColor = 200;
float r;
float a;
float b;
float c = 0.0;
float inc = TWO_PI/25;
PImage flowerOne;
PImage flowerTwo;
PFont f;

void setup() {
  size(1100, 900);
  background(150);
  smooth(5);
  cursor(CROSS);
  noStroke();
  rectMode(CENTER);
  
  f = createFont("Ariel", 72);
  textFont(f);
  
  for (int i = 0; i < 1300; i += 120) {
     for (int j = 0; j < 900; j += 120) {
      fill(windowColor);
      rect(i, j, 50, 50);
     }
  }

  
  flowerOne = loadImage("https://i.imgur.com/gWMkGCK.png");
  flowerTwo = loadImage("https://i.imgur.com/o8oT6ZI.png");
}

void draw() {
  
   for (int i=0; i<1200; i+=4) {
     strokeWeight(2);
     stroke(255);
      line(i, 450, i, 450+sin(c)*450.0);
      c = c + inc;
      noStroke();
    }
  
  r = (random(10)/10);
  a = random(1200);
  b = random(900);
  
  if(mousePressed) {
    windowColor = 235;
    for (int i = 0; i < 1300; i += 120) {
     for (int j = 0; j < 900; j += 120) {
      fill(windowColor);
      rect(i, j, 50, 50);
      ellipse(a, b, r*10, r*10);
      ellipse(b, a, r*10, r*10);
     }
    }
    
    fill(255);
    textAlign(CENTER);
    displayText("h i . b y e", width/2, height/2);
  
    
   
    newKeyChoice();
    //println("Draw Type: " + drawType + " Key:" + key);
    }
}

void displayText(String j, int k, int l) {
  fill(255);
  text(j, k, l);
}

void newKeyChoice() {
  //Flower One Brush
  if (key == '1' ) {
       drawType = 1;
       key = '1';
       frameRate(10);
       image(flowerOne, mouseX, mouseY, width/imageSize*r, height/imageSize*r);
    }
    //Flower Two Brush
    else if (key == '2') {
        drawType = 2;
        key = '2';
        frameRate(10);
        image(flowerTwo, mouseX, mouseY, width/imageSize*r, height/imageSize*r);
    }
    //Just a Brush
    else if (key == '3') {
        drawType = 3;
        key = '3';
        frameRate(60);
        strokeWeight(10);
        stroke(255);
        line(mouseX, mouseY, pmouseX, pmouseY);
        noStroke();
    }
    
    else if ((key == 's') && (drawType == 1)) {
      if (imageSize > 1){
    imageSize--;
      }
    key = '1';
    }
    else if ((key == 'a') && (drawType == 1)) {
    imageSize++;
    key = '1';
    }
    else if ((key == 's') && (drawType == 2)) {
      if (imageSize > 1){
    imageSize--;
      }
    key = '2';
    }
    else if ((key == 'a') && (drawType == 2)) {
    imageSize++;
    key = '2';
    }
  }
  
