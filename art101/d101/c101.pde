Puddle a;
Rain d;


ArrayList<Puddle> ellipses;
ArrayList<Puddle> ellipses2;
ArrayList<Rain> rainDrops;

float y3 = 600;
float y4 = 600;
float y5 = 600;
float tr = 255;
float tr2 = 255;
float bgColor = 50;
float k = 0.1;

void setup() {
  rectMode(CENTER);
  background(200);
  size(1500, 700);
  stroke(255, 255, 255, 50);
  ellipses = new ArrayList<Puddle>();
  ellipses2 = new ArrayList<Puddle>();
  rainDrops = new ArrayList<Rain>();
}

void draw() {


  float cat = frameCount*random(100) % 37;
  println(frameCount);
  if ((cat > 12 ) && (cat <13)) {
    background (bgColor+50);
  } else {
    background (bgColor);
  }

  if (frameCount <800) {
    bgColor +=.2;
  } else if 
    (frameCount >800) {
    bgColor -=.5;
  }


  //sun
  noStroke();
  fill(255, 230, 230, tr);
  ellipse(width/2, y3, 200, 200);
  y3 -= .5;
  tr -= .5;
  
  
  fill(255, 230, 230, tr);
  int nbr_circles = 250;

  float phi = (sqrt(5)+1)/2 - 1;            // golden ratio
  float golden_angle = phi * TWO_PI;        // golden angle
  float lg_rad = width * .1;

  float sm_rad = 5;
  float cx = width/2;
  float cy = y3;

  for (int i = 1; i <= nbr_circles; ++i) {
    float ratio = i/(float)nbr_circles;
    float angle = i*golden_angle-k*2;
    float spiral_rad = ratio * lg_rad*k;
    float n = cx + cos(angle) * spiral_rad*k;
    float m = cy + sin(angle) * spiral_rad*k;
    ellipse(n, m, sm_rad/k, sm_rad/k);
  }
  k += 0.005;

  //horizon
  fill(bgColor, 255);
  noStroke();
  rect(width/2, 600, width, 200);

  if (frameCount > 800) {
    moon();
  }
  float x = random(width);
  float y = random(100)+600;
  float x2 = random(width);
  float y2 = random(100)+520;


  //rain
  rainDrops.add(new Rain(x, 0));

  for (Rain d : rainDrops) {
    if (d.falls()) {
      d.falling = false;
      d.bouncing = true;
    }
    d.fall();
    d.start();
  }

  //ripples  
  if (frameCount > 130) {
    ellipses.add(new Puddle(x, y));
    for (Puddle a : ellipses) {
      if (a.fade()) {
        a.fading = false;
      }
      a.ripple();
      a.start();
    }
    ellipses2.add(new Puddle(x2, y2));
    for (Puddle a : ellipses2) {
      if (a.fade2()) {
        a.fading2 = false;
      }
      a.ripple2();
      a.start2();
    }
  }
}

void moon() {
  noStroke();
  fill(255, 255, 255, tr2);
  ellipse(width/2, y4, 100, 100);
  y4 -= 1;
  y5 -= .5;
  tr2 -= .5;



  fill(255, 255, 255, tr2);
  int nbr_circles = 250;

  float phi = (sqrt(5)+1)/2 - 1;            // golden ratio
  float golden_angle = phi * TWO_PI;        // golden angle
  float lg_rad = width * 1;

  float sm_rad = 1;
  float cx = width/2;
  float cy = y5;

  for (int i = 1; i <= nbr_circles; ++i) {
    float ratio = i/(float)nbr_circles;
    float angle = i*golden_angle;
    float spiral_rad = ratio * lg_rad;
    float q = cx + cos(angle) * spiral_rad*01;
    float w = cy + sin(angle) * spiral_rad*01;
    fill(random(200, 255), 70*tr2);
    ellipse(q, w, sm_rad*random(3), sm_rad*random(3));
  }

  //horizon
  fill(bgColor, 255);
  noStroke();
  rect(width/2, 600, width, 200);
}
