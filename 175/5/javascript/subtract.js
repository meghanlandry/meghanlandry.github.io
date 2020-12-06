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

let spaceFaceErase;

function preload() {
  space_1 = loadImage('images/space_1.png')
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
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('space');
  spaceRatio = space_1.height / space_1.width;
  spaceHeight = windowWidth * spaceRatio;
  spaceFaceErase = createGraphics(windowWidth, spaceHeight);
}

function draw() {
  clear();
  drawBase();
  drawEyes();
  drawFace();
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
  spaceFaceErase.image(space_5, 0, 0, windowWidth, spaceHeight);
  image(spaceFaceErase, 0, 0, windowWidth, spaceHeight);
}


function drawHair() {
  image(space_6a, 0, 0, windowWidth, spaceHeight);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
