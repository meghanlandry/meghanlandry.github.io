clouds = [];

//why are libraries such a pain
let sec = 0;
let min = 0;
let hr = 0;

//sun and moon objects
let skyDay;
let skyNight;

//accounting for AM and PM in loop
let ampmCheck;
let mapDeg;
let mapRay;
let hrCt;
let label;

let setUpCheck = true;

//arrays of objects
stars = [];
rays = [];
cloudList = [];

//cloud images
function preload() {
  clouds[0] = loadImage('cloud_1.png');
  clouds[1] = loadImage('cloud_2.png');
  clouds[2] = loadImage('cloud_3.png');
  clouds[3] = loadImage('cloud_4.png');
}


//setup
function setup() {

  background(0);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  imageMode(CENTER);
  angleMode(DEGREES);


  sec = second();
  min = minute();
  hr = hour();
  ampmChecker();
  let totMinPM = (((hr + ampmCheck) * 60) + min);
  hrCt = (hr - 6);
  mapDeg = map(min, 0, 60, 0, windowWidth) + sec;
  mapRay = map(min, 0, 60, 0, 360);
  //console.log("a: " + mapDeg + " " + min + " / " + windowWidth);
  skyDay = new Sun();
  skyNight = new Moon();

  if ((hr <= 6) && (hr >= 18)) {
    for (let i = 0; i < totMinPM; i++) {
      stars[i] = new Stars();
      stars[i].display();
    }
  } else {
    for (let i = 0; i < hrCt; i++) {
      label = (i + 1);
      cloudList[i] = new Cloud(label);
      cloudList[i].move();
    }
  }
  setUpCheck = false;
}

//loop
function draw() {

  //timekeeping
  sec = second();
  min = minute();
  hr = hour();
  ampmChecker();
  hrCt = (hr - 6);
  totMinPM = (((hr + ampmCheck) * 60) + min)
  mapDeg = map(min, 0, 60, 0, windowWidth) + sec;
  mapRay = map(min, 0, 60, 0, 360);
  //console.log("a: " + min + " " + mapDeg + " / " + windowWidth);
  //console.log(totMinPM + " . " + min + " . " + hr );

  //day loop
  if ((hr == 6) && (min == 0) && (sec < 15)) {
    background(243, 225, 225, 255)
    stars = [];
    skyDay.display();
  } else if ((hr == 18) && (min == 0) && (second < 15)) {
    clouds = [];
    background(20, 20, 45, 255)
  } else if ((hr >= 6) && (hr <= 17)) {
    background(243, 225, 225, 255);
    skyDay.expand();
    skyDay.display();
    //clouds
    for (let i = 0; i < hrCt; i++) {
      if (hrCt > (cloudList.length)) {
        label++;
        cloudList[i].move();
        cloudList.push(new Cloud(label));
      }
    }
    for (let i = 0; i < cloudList.length; i++) {
      cloudList[i].move();
      cloudList[i].display();
    }
  } else {
    background(20, 20, 45)
    if (totMinPM > (stars.length)) {
      stars.push(new Stars());
    }
    for (let i = 0; i < stars.length; i++) {
      stars[i].display();
    }
    skyNight.display();
  }
  circleRays();
}

//FUNCTIONS
//sets up AM/PM variable
function ampmChecker() {
  if (hr < 12) {
    ampmCheck = 6;
  } else {
    ampmCheck = -18;
  }
}

//draws ring of minute rays
function circleRays() {
  circles = 12;
  angle = 360 / circles;
  let typeC;
  if ((hr >= 6) && (hr <= 17)) {
    typeC = skyDay.r;
  } else {
    typeC = skyNight.r;
  }

  for (var i = 0; i < circles; i++) {
    xCircle = windowWidth / 2 + cos(angle * i) * (typeC * 1.2);
    yCircle = windowHeight / 2 + sin(angle * i) * (typeC * 1.2);
    xCircle2 = windowWidth / 2 + cos(angle * i) * ((typeC * 1.2) + sec * 2);
    yCircle2 = windowHeight / 2 + sin(angle * i) * ((typeC * 1.2) + sec * 2);
    strokeWeight(10);
    stroke(255, 200);
    line(xCircle, yCircle, xCircle2, yCircle2);
  }
}


//OBJECTS
//sun
class Sun {
  constructor() {
    noStroke();
    this.x = (windowWidth / 2);
    this.y = (windowHeight / 2);
    this.r = 200;
  }

  expand() {
    this.r += (random(-3, 3));
  }

  display() {
    noStroke();
    fill(255, 255, 255, 255)
    ellipse(this.x, this.y, this.r * 2);
    fill(255, 255, 255, 50)
    ellipse(this.x, this.y, (this.r * 2) + random(50));
    ellipse(this.x, this.y, (this.r * 2) + random(100));
  }
}

//moon
class Moon {
  constructor() {
    noStroke();
    this.x = (windowWidth / 2);
    this.y = (windowHeight / 2);
    this.r = 100;
  }

  expand() {
    this.diameter += 1;
  }

  display() {
    noStroke();
    fill(255, 225, 225, 255)
    ellipse(this.x, this.y, this.r * 2);
    fill(255, 255, 255, 50)
    ellipse(this.x, this.y, this.r * 2 + 15 + (random(-3, 3)));
  }
}

//stars
class Stars {
  constructor() {
    noStroke();
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(3);
  }

  display() {
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.r * 2);
    fill(255, 255, 255, 75);
    ellipse(this.x, this.y, this.r * 2 + 1 + (random(-3, 3)));
  }
}

//clouds

class Cloud {
  constructor(label) {
    this.x = mapDeg;
    this.y = (windowHeight * (random(.5, .9)));
    this.tint = random(230, 255);
    this.type = floor(random(4));
    this.endPoint = false;
    this.label = label;
    this.stop = (windowWidth - (this.label * (windowWidth / 12)));
  }

  move() {
    if ((hrCt > this.label) && (setUpCheck == true)) {
      this.endPoint = true;
    }

    if (this.endPoint == false) {
      if (this.x < this.stop) {
        this.x = mapDeg;
      } else {
        this.endPoint = true;
        this.x = this.stop;
      }
    } else {
      this.x = this.stop;
    }
  }

  display() {
    tint(this.tint);
    image(clouds[this.type], this.x, this.y, width / 3, height / 3);
  }
}
