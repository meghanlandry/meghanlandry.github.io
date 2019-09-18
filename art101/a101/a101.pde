float c = 0.0;
float inc = TWO_PI/25;
float a;
float b;

void setup() {
  size(500, 500);
  background(255, 230, 230);
  stroke(255);
  strokeWeight(10);
  smooth(4);
  
  for (int i = 0; i < 1300; i += 120) {
     for (int j = 0; j < 900; j += 120) {
      fill(250);
      rect(i, j, 50, 50);
     }
  }
  
  mouseX = 250;
  mouseY = 250;
  
  for (int i=0; i<500; i+=1) {
    for (int j=-100; j<100; j+=50) {
    line(j, 1, i, i);
    }
  }
  
  for (int i=0; i<500; i+=4) {
    line(i, 10, i, 50+sin(c)*20.0);
    c = c + inc;
    }
    
  for (int i=0; i<500; i+=4) {
    line(i, 300, i, 300+sin(c)*20.0);
    c = c + inc;
    }
    
    noStroke();
    fill(40, 60, 120);
  
 }


void draw() {
  a = random(50);
  b = (100 + random (80));
  
  fill(b, b, b);
  
  ellipse(mouseX, mouseY, a, a);
  println("Circle Location: " + mouseX + ", " + mouseY + ".");
  
  //saveFrame("line-######.png");
 }
