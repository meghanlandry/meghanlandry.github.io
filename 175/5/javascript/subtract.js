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
let space_mask;

var alphaSpace;
var spaceFaceErase;
var rad = 5;
var randomSpace;

var inc = 0.1;
var scl = 10;
var col, rows;
var zoff = 0;
var particle = [];
var flowfield;

var fade = 10;

var star = [];

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
  space_mask = loadImage('images/space_mask.png')
}

function setup() {
  smooth();
  alphaSpace = color(0,0);
  spaceRatio = space_1.height / space_1.width;
  spaceHeight = windowWidth * spaceRatio;
  var canvas = createCanvas(windowWidth, spaceHeight);
  canvas.parent('space');
  spaceBase = createGraphics(windowWidth/2, spaceHeight, [WEBGL]);

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
  randomSpace = random(5,20);
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
  image(spaceBase, windowWidth/2, 0, windowWidth/2, spaceHeight);
  image(spaceBase, windowWidth/2, 0, windowWidth/2, spaceHeight);
  image(space_4, 0, 0, windowWidth, spaceHeight);

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(8); //sets how closely particles follow flor
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.003;
  }
  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
  }
  for (var i = 0; i < star.length; i++) {
        star[i].display();
  }
  image(space_mask, 0, 0, windowWidth, spaceHeight);
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
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        spaceFaceErase.set(x,y,alphaSpace);
      }
    }
  }
  spaceFaceErase.updatePixels();
}

function mouseDragged() {
  var randomNum = random(20);
  var randomNum2 = random(-10,10);
  var randomNum3 = random(-10,10);
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        spaceFaceErase.set(x, y, alphaSpace);
        spaceFaceErase.set(x+randomNum, y+randomNum,alphaSpace);
        spaceFaceErase.set(x+randomNum2, y+randomNum3, alphaSpace);
      }
    }
  }
  spaceFaceErase.updatePixels();
}

function Star() {

  this.constructor = function() {
    noStroke();
    this.x = random(windowWidth/2, windowWidth);
    this.y = random(windowHeight*2);
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
