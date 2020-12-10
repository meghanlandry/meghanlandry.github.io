// erase code adapted from Daniel Harty's work here: https://codepen.io/mfranz2/details/vMGGzQ
// perlin noise code adapted from The Coding Train here: https://www.youtube.com/watch?v=BjoM9oKOAKY

//variables
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
let space_mask;

//alpha paint vars
var alphaSpace;
var spaceFaceErase;
var rad = 5;
var randomSpace;

//flowfield vars
var inc = 0.1;
var scl = 10;
var col, rows;
var zoff = 0;
var particle = [];
var flowfield;

//star vars
var fade = 10;
var star = [];

//preloads images
function preload() {
  space_1 = loadImage('images/space_1.png');
  space_2a = loadImage('images/space_2a.png')
  space_2b = loadImage('images/space_2b.png')
  space_3a = loadImage('images/space_3a.png')
  space_3b = loadImage('images/space_3b.png')
  space_4 = loadImage('images/space_4.png')
  space_5 = loadImage('images/space_5.png')
  space_6a = loadImage('images/space_6a.png')
  space_6b = loadImage('images/space_6b.png')
  space_6c = loadImage('images/space_6c.png')
  space_mask = loadImage('images/space_mask.png')
}

//setup
function setup() {
  smooth(); //supposedly smooths lines
  //sets a variable to no opacity to paint with alpha
  alphaSpace = color(0, 0);
  //keeps aspect ratio intact with making sketch fill page
  spaceRatio = space_1.height / space_1.width;
  spaceHeight = windowWidth * spaceRatio;
  //lets canvas be within a div, unused at current version, but doesn't hurt anything, so leaving it in case
  var canvas = createCanvas(windowWidth, spaceHeight);
  canvas.parent('space');
  //creates an "image" that has a sketch inside
  spaceBase = createGraphics(windowWidth / 2, spaceHeight, [WEBGL]);


  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 800; i++) {
    particle[i] = new Particle();
  }
  for (var i = 0; i < 2000; i++) {
    star[i] = new Star();
    star[i].constructor();
  }

  spaceFaceErase = createGraphics(windowWidth, spaceHeight, [WEBGL]);
  spaceFaceErase.image(space_5, 0, 0, windowWidth, spaceHeight);
}

function draw() {
  randomSpace = random(5, 20);
  rad = 5 * randomSpace * 0.1;
  var x = mouseX * random(20) * 0.5;
  var y = mouseY * random(20) * 0.5;
  noStroke();
  clear();
  drawBase();
  drawEyes();
  drawFace();
  if (mouseIsPressed) {
    noFill();
    stroke("pink");
    ellipse(x, y, rad * 2, rad * 2);
  }
  //drawHair();
}

function drawBase() {
  spaceRatio = space_1.height / space_1.width;
  resizeCanvas(windowWidth, spaceHeight);
  spaceHeight = windowWidth * spaceRatio;
  //blue base image
  image(space_1, 0, 0, windowWidth, spaceHeight);
  //displays flowfield code, layered twice for better visibility.
  image(spaceBase, windowWidth / 2, 0, windowWidth / 2, spaceHeight);
  image(spaceBase, windowWidth / 2, 0, windowWidth / 2, spaceHeight);
  //teeth image
  image(space_4, 0, 0, windowWidth, spaceHeight);

  //code for flowfield
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    //creates perline noise and sets positional offsets based on it
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(8); //sets how closely particles follow flow
      //vector array, v used in particle file
      flowfield[index] = v;
      //+= makes the particles move forward
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.003;
  }

  //pulls functions from particle.js and applies them to each object in the array
  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
  }

  //same thing, but stars
  for (var i = 0; i < star.length; i++) {
    star[i].display();
  }

  //inelegant solution to unexpected behavior of mask not working with createGraphics
  image(space_mask, 0, 0, windowWidth, spaceHeight);
}

function drawEyes() {
  //moon eyes
  //intended to have moon phases, but again masking not working as expected, no time for alternate solution
  image(space_2b, 0, 0, windowWidth, spaceHeight);
  image(space_2a, 0, 0, windowWidth, spaceHeight);
}

function drawFace() {
  //pulls from renderer object
  image(spaceFaceErase, 0, 0, windowWidth, spaceHeight);
}

//unused, managing hair with html/css, kept in case
function drawHair() {
  image(space_6a, 0, 0, windowWidth, spaceHeight);
}

//modifies existing p5js mousePressed/Dragged Function
//sets an area in a radius around a point to 0 opacity
//single point click to erase skin
function mousePressed() {
  for (var x = mouseX - rad; x < mouseX + rad; x++) {
    for (var y = mouseY - rad; y < mouseY + rad; y++) {
      if ((dist(x, y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        spaceFaceErase.set(x, y, alphaSpace);
      }
    }
  }
  spaceFaceErase.updatePixels();
}
//drag to erase skin
function mouseDragged() {
  var randomNum = random(20);
  var randomNum2 = random(-10, 10);
  var randomNum3 = random(-10, 10);
  for (var x = mouseX - rad; x < mouseX + rad; x++) {
    for (var y = mouseY - rad; y < mouseY + rad; y++) {
      if ((dist(x, y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        //erases from 3 points, one on mouse click, two randomly spaced around
        spaceFaceErase.set(x, y, alphaSpace);
        spaceFaceErase.set(x + randomNum, y + randomNum, alphaSpace);
        spaceFaceErase.set(x + randomNum2, y + randomNum3, alphaSpace);
      }
    }
  }
  spaceFaceErase.updatePixels();
}

function Star() {
//simple constructor function, picks a random spot and makes a random size star, makes two, one at low opacity to create glow
  this.constructor = function() {
    noStroke();
    this.x = random(windowWidth / 2, windowWidth);
    this.y = random(windowHeight * 2);
    this.r = random(3);
  }

  this.display = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.r);
    fill(255, 255, 255, 75);
    ellipse(this.x, this.y, this.r + 1 + (random(-3, 3)));

  }
}
