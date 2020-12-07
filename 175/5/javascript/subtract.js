// erase code adapted from Daniel Harty's work here: https://codepen.io/mfranz2/details/vMGGzQ

let space_1;
let spaceRatio;
let spaceHeight;
let space_2a;
let space_2b;
let space_3a;
let space_3b;
let space_4;
let space_5;
let space_6a;
let space_6b;
let space_6c;

var alphaSpace;
var spaceFaceErase;
var rad = 5;
var randomSpace;

function preload() {
  space_1 = loadImage('images/space_1.png');
  space_2a = loadImage('images/space_2a.png')
  space_2b = loadImage('images/space_2b.png')
  space_3a = loadImage('images/space_3a.png')
  space_3b = loadImage('images/space_3b.png')
  space_4 = loadImage('images/space_4.png')
  space_5 = loadImage('images/space_5.png')
  space_6a = loadImage('images/space_6a.png')
  space_6b = loadImage('images/space_6a.png')
  space_6c = loadImage('images/space_6c.png')
}

function setup() {
  smooth();
  alphaSpace = color(0,0);
  spaceRatio = space_1.height / space_1.width;
  spaceHeight = windowWidth * spaceRatio;
  var canvas = createCanvas(windowWidth, spaceHeight);
  canvas.parent('space');
  spaceFaceErase = createGraphics(windowWidth, spaceHeight, [WEBGL]);
  spaceFaceErase.image(space_5, 0, 0, windowWidth, spaceHeight);
}

function draw() {
  randomSpace = random(20);
  rad = 5*randomSpace*0.1;
  var x = mouseX*random(20)*0.5;
  var y = mouseY*random(20)*0.5;
  noStroke();
  clear();
  drawBase();
  drawEyes();
  drawFace();
  if (mouseIsPressed) {
    noFill();
    stroke("pink");
    ellipse(x, y, rad*2, rad*2);
  }
  drawHair();
}

function drawBase() {
  spaceRatio = space_1.height / space_1.width;
  resizeCanvas(windowWidth, spaceHeight);
  spaceHeight = windowWidth * spaceRatio;
  image(space_1, 0, 0, windowWidth, spaceHeight);
  image(space_4, 0, 0, windowWidth, spaceHeight);
}

function drawEyes() {
  image(space_2b, 0, 0, windowWidth, spaceHeight);
  image(space_2a, 0, 0, windowWidth, spaceHeight);
}

function drawFace() {
  image(spaceFaceErase, 0, 0, windowWidth,spaceHeight);
}

function drawHair() {
  image(space_6a, 0, 0, windowWidth, spaceHeight);
}

function mousePressed() {
  var randomNum = random(20);
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        console.log(x, y)
        spaceFaceErase.set(x+randomNum,y+randomNum,alphaSpace);
      }
    }
  }
  spaceFaceErase.updatePixels();
}

function mouseDragged() {
  var randomNum = random(20);
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        spaceFaceErase.set(x+randomNum, y+randomNum,alphaSpace);
      }
    }
  }
  spaceFaceErase.updatePixels();
}
