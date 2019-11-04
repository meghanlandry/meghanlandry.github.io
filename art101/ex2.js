var drawType;
var imageSize = 3;
var windowColor = 200;
var r;
var a;
var b;
var c = 0.0;

var flowerOne;
var flowerTwo;
var f;

function preload() {
  flowerOne = loadImage("https://i.imgur.com/gWMkGCK.png");
  flowerTwo = loadImage("https://i.imgur.com/o8oT6ZI.png");
}

function setup() {
  createCanvas(1100, 900);
  background(150);
  smooth(5);
  cursor(CROSS);
  noStroke();
  rectMode(CENTER);

  f = loadFont("Ariel", 72);
  textFont(f);

  for (var i = 0; i < 1300; i += 120) {
     for (var j = 0; j < 900; j += 120) {
      fill(windowColor);
      rect(i, j, 50, 50);
     }
  }
}

function draw() {
  var inc = TWO_PI / 25;
   for (let i=0; i<1200; i+=4) {
     strokeWeight(2);
     stroke(255);
      line(i, 450, i, 450+sin(c)*450.0);
      c = c + inc;
      noStroke();
    }

  r = (random(10)/10);
  a = random(1200);
  b = random(900);

  if(mouseIsPressed) {
    windowColor = 235;
    for (var i = 0; i < 1300; i += 120) {
     for (var j = 0; j < 900; j += 120) {
      fill(windowColor);
      rect(i, j, 50, 50);
      ellipse(a, b, r*10, r*10);
      ellipse(b, a, r*10, r*10);
     }
    }

    fill(255);
    textAlign(CENTER);
    text("h i . b y e", width/2, height/2);



    newKeyChoice();
    //prvarln("Draw Type: " + drawType + " Key:" + key);
    }


if(keyIsPressed){
  newKeyAction();
}
}

// function displayText(var j, var k, var l) {
//   fill(255);
//   text(j, k, l);
// }

function newKeyChoice() {
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

function newKeyAction(){
    if ((key == 'z') && (drawType == 1)) {
    placeRandomFlowerOne();
    key = '1';
    }
    else if ((key == 'x') && (drawType == 1)) {
    placeRandomFlowerTwo();
    key = '1';
    }
    else if ((key == 'z') && (drawType == 2)) {
    placeRandomFlowerOne();
    key = '2';
    }
    else if ((key == 'x') && (drawType == 2)) {
    placeRandomFlowerTwo();
    key = '2';
    }
    else if ((key == 'z') && (drawType == 0)) {
    placeRandomFlowerOne();
    key = '1';
    }
    else if ((key == 'x') && (drawType == 0)) {
    placeRandomFlowerTwo();
    key = '2';
    }
    else if (key == 'q'){
      cover();
      key = '0';
    }
     else if (key == 'w'){
       talk();
       key = '0';
    }
  }

  function placeRandomFlowerOne(){
    ellipse(a, b, 100, 100);
    image(flowerOne, a, b, width/imageSize*r, height/imageSize*r);
    //prvarln("working 1");
  }

  function placeRandomFlowerTwo(){
    rect(a, b, 100, 100);
    image(flowerTwo, a, b, width/imageSize*r, height/imageSize*r);
  }

  function cover(){
      createCanvas(1100, 900);
      background(150);
  }

  function talk(){
    prvarln("I'm really just trying to fill a 6th function. It's hard to make functions for the sake of just making them without any specific purpose in mind.");
  }
