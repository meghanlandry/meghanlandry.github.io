let cloud_1;
let cloud_2;
let cloud_3;
let cloud_4;

//why are libraries such a pain
let sec = 0;
let min = 0;
let hr = 0;

//sun and moon objects
let skyDay;
let skyNight;

//accounting for AM and PM in loop
let ampmCheck;

//arrays of objects
stars = [];
clouds = [];
rays = [];

function preload() {
clouds[0] = loadImage('cloud_1.png');
clouds[1] = loadImage('cloud_2.png');
clouds[2] = loadImage('cloud_3.png');
clouds[3] = loadImage('cloud_4.png');
}

//setup
function setup() {
  console.log(clouds.length); //?????????????????????

  background(0);
  createCanvas(windowWidth, windowHeight);
  noStroke();

  sec = second();
  min = minute();
  hr = hour();
  ampmChecker();
  let totMinPM = (((hr+ampmCheck) * 60) + min);
  let hrCt = (hr-6);

  skyDay = new Sun();
  skyNight = new Moon();

  if ((hr <= 6) && (hr >= 18)){
  for (let i = 0; i < totMinPM; i++) {
    stars[i] = new Stars();
    stars[i].display();
  }
  } else {
    for (let i = 0; i < hrCt; i++) {
      console.log("running");
      var r = floor(random(0, clouds.length));
      var n = new Clouds(100, 100, clouds[r]);
      clouds.push(n);
  }
  }
}

//loop
function draw() {
  console.log(clouds.length); //?????????????????????????
  //timekeeping
  sec = second();
  min = minute();
  hr = hour();
  ampmChecker();
  hrCt = (hr-6);
  totMinPM = (((hr+ampmCheck) * 60) + min)
  //console.log(totMinPM + " . " + min + " . " + hr );

  //day loop
  if ((hr == 6) && (min == 0) && (sec < 15)) {
    background(243, 225, 225, 255)
    stars = [];
    skyDay.display();
  } else if ((hr == 18) && (min == 0) && (second < 15)){
    background(20, 20, 45, 255)
  }else if((hr >= 6) && (hr <= 17)) {
    background(243, 225, 225, 10);
    skyDay.expand();
    skyDay.display();
    for (let i = 0; i < clouds.length; i++) {
      var r = floor(random(0, clouds.length));
      var n = new Clouds(100, 100, clouds[r]);
      clouds[r].display();
      //clouds[n].push();
      //clouds[i] = new Clouds();
  }
  //night loop
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
}

//FUNCTIONS
//sets up AM/PM variable
function ampmChecker() {
  if (hr<12) {
    ampmCheck = 6;
  } else {
    ampmCheck = -18;
  }
}


//OBJECTS
//sun
class Sun {
  constructor() {
    this.x = (windowWidth / 2);
    this.y = (windowHeight / 2);
    this.diameter = 500;
  }

  expand() {
    this.diameter += (random(-3, 3));
  }

  display() {
    fill(255, 255, 255, 255)
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

//moon
class Moon {
  constructor() {
    this.x = (windowWidth / 2);
    this.y = (windowHeight / 2);
    this.r = 100;
  }

  expand() {
    this.diameter += 1;
  }

  display() {
    fill(255, 225, 225, 255)
    ellipse(this.x, this.y, this.r*2);
    fill(255, 255, 255, 50)
    ellipse(this.x, this.y, this.r*2 + 15 + (random(-3, 3)));
  }
}

//stars
class Stars {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(3);
  }

  display() {
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.r*2);
    fill(255, 255, 255, 75);
    ellipse(this.x, this.y, this.r*2 + 1 + (random(-3, 3)));
  }
}

//clouds

class Clouds {
  contructor (x, y, img){
    this.x = 100;
    this.y = 100;
    this.img = img;
    // this.tintEffect = random(100);
    // this.speed = 1;
    // this.endpoint = endpoint;
  }

    display(){
      image(this.x, this.y, this.img);
    }
  }

class Shine {
  cunstructor(){
    this.x;
    this.y;
    this.len;
    
  }
}
