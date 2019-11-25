//variables
let colA;
let colB;
let colC;
let colD;
let colE;
let palettes;
let quotes;

let rA;
let gA;
let bA;

let rB;
let gB;
let bB;

let rC;
let gC;
let bC;

let rD;
let gD;
let bD;

let rE;
let gE;
let bE;

let cat_1;
let cat_2;
let cat_3;
let cat_4;
let cat_line;

let flower_1;
let flower_2;
let flower_3;
let flower_4;
let flower_line;

let smflower_1;
let smflower_2;
let smflower_3;
let smflower_4;
let smflower_line;

let moon_1;
let moon_3;
let moon_4;
let moon_line;

let promptString;
let quoteString;
let catString;



function preload() {
  let proxyurl = "https://cors-anywhere.herokuapp.com/"; //use proxy to get around http problem

  let url = "http://www.colourlovers.com/api/palettes/new?format=json"; //colourlovers API
  palettes = loadJSON(proxyurl + url, gotData);

  //backup static JSON because site is sometimes unresponsive
  //let url = "cl.json"
  //palettes = loadJSON(url, gotData);

  let urlTwo = "https://ineedaprompt.com/dictionary/default/prompt?q=adj+noun+adv+verb+noun+location"; //prompt generator
  prompts = loadJSON(proxyurl + urlTwo, gotData);

  let urlThree = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"; //quote generator
  quotes = loadJSON(proxyurl + urlThree, gotData);

  let urlFour = "https://catfact.ninja/fact?max_length=140" //cat fact generator
  facts = loadJSON(proxyurl + urlFour, gotData);

  //preload images
  cat_1 = loadImage("images/cat_1.png");
  cat_2 = loadImage("images/cat_2.png");
  cat_3 = loadImage("images/cat_3.png");
  cat_4 = loadImage("images/cat_4.png");
  cat_line = loadImage("images/cat_line.png");

  flower_1 = loadImage("images/flower_1.png");
  flower_2 = loadImage("images/flower_2.png");
  flower_3 = loadImage("images/flower_3.png");
  flower_4 = loadImage("images/flower_4.png");
  flower_line = loadImage("images/flower_line.png");

  smflower_1 = loadImage("images/smflower_1.png");
  smflower_2 = loadImage("images/smflower_2.png");
  smflower_3 = loadImage("images/smflower_3.png");
  smflower_4 = loadImage("images/smflower_4.png");
  smflower_line = loadImage("images/smflower_line.png");

  moon_1 = loadImage("images/moon_1.png");
  moon_3 = loadImage("images/moon_3.png");
  moon_4 = loadImage("images/moon_4.png");
  moon_line = loadImage("images/moon_line.png");

}


function setup() {

  //gets palettes from JSON
  colA = palettes[0].colors[0];
  colB = palettes[0].colors[1];
  colC = palettes[0].colors[2];
  colD = palettes[0].colors[3];
  colE = palettes[0].colors[4];
  //console.log(colA + ", " + colB + ", " + colC + ", " + colD + ", " + colE);

  promptString = prompts.english;
  console.log(promptString);
  quoteString = quotes.quoteText;
  console.log(quoteString);
  catString = facts.fact;
  console.log(catString);

  //arrays with variables for hexcodes and RGB
  let hexes = [colA, colB, colC, colD, colE];
  let reds = [rA, rB, rC, rD, rE];
  let greens = [gA, gB, gC, gD, gE];
  let blues = [bA, bB, bC, bD, bE];

  //converts hexcode to RGB
  for (i = 0; i < 5; i++) {
    let {
      r,
      g,
      b
    } = hexToRgb(hexes[i]);
    reds[i] = r;
    greens[i] = g;
    blues[i] = b;
    console.log(hexes[i] + ": " + reds[i] + " " + greens[i] + " " + blues[i]);
  }

  cat_1.loadPixels();
  cat_2.loadPixels();
  cat_3.loadPixels();
  cat_4.loadPixels();
  cat_line.loadPixels();



  flower_1.loadPixels();
  flower_2.loadPixels();
  flower_3.loadPixels();
  flower_4.loadPixels();
  flower_line.loadPixels();

  smflower_1.loadPixels();
  smflower_2.loadPixels();
  smflower_3.loadPixels();
  smflower_4.loadPixels();
  smflower_line.loadPixels();

  moon_1.loadPixels();
  moon_3.loadPixels();
  moon_4.loadPixels();
  moon_line.loadPixels();

  //actual setup
  createCanvas(windowWidth, windowHeight);
  push();
  //tint(reds[2], greens[2], blues[2], 100);
  background(reds[2], greens[2], blues[2], 200);
  pop();
  textFont("Megrim");
  imageMode(CENTER);

  //*tests*
  // fill("#" + colB);
  // strokeWeight(10);
  // stroke("#" + colC);
  // ellipse(windowWidth/2, windowHeight/2, 1000);
  // push();
  // fill("#" + colD)
  // strokeWeight(5);
  // stroke("#" + colE)
  // textSize(windowWidth/15);
  // textAlign(CENTER);
  // text("TEST TEST test test...", windowWidth/2, windowHeight/4);
  // pop();
//images

//this kills the computer
//   for (var y = 0; y < cat_line.height; y++) {
//     for (var x = 0; x < cat_line.width; x++) {
//       //console.log(x + " " + y);
//       var index = (x + y * cat_line.width)*4;
//       cat_line.pixels[index+0] = rA;
//       cat_line.pixels[index+1] = gA;
//       cat_line.pixels[index+2] = bA;
//       cat_line.pixels[index+3] = pixels[index+3];
//     }
//   }
// cat_line.updatePixels();


//cat image layers
push();
tint(reds[0], greens[0], blues[0], 255);
cat_1.resize(windowWidth/1.8, 0);
image(cat_1, windowWidth*.65, windowHeight*.7);
pop();

push();
tint(reds[2], greens[2], blues[2], 255);
cat_3.resize(windowWidth/1.8, 0);
image(cat_3, windowWidth*.65, windowHeight*.7);
pop();

push();
tint(reds[3], greens[3], blues[3], 255);
cat_4.resize(windowWidth/1.8, 0);
image(cat_4, windowWidth*.65, windowHeight*.7);
pop();

push();
tint(reds[1], greens[1], blues[1], 255);
cat_2.resize(windowWidth/1.8, 0);
image(cat_2, windowWidth*.65, windowHeight*.7);
pop();

push();
tint(reds[4], greens[4], blues[4], 255);
cat_line.resize(windowWidth/1.8, 0);
image(cat_line, windowWidth*.65, windowHeight*.7);
pop();

//moon image layers
push();
tint(reds[0], greens[0], blues[0], 255);
moon_1.resize(windowWidth/2.5, 0);
image(moon_1, windowWidth*.5, windowHeight*.43);
pop();

push();
tint(reds[3], greens[3], blues[3], 255);
moon_4.resize(windowWidth/2.5, 0);
image(moon_4, windowWidth*.5, windowHeight*.43);
pop();

push();
tint(reds[2], greens[2], blues[2], 255);
moon_3.resize(windowWidth/2.5, 0);
image(moon_3, windowWidth*.5, windowHeight*.43);
pop();

push();
tint(reds[4], greens[4], blues[4], 255);
moon_line.resize(windowWidth/2.5, 0);
image(moon_line, windowWidth*.5, windowHeight*.43);
pop();

//flower image layers
push();
tint(reds[1], greens[1], blues[1], 255);
flower_2.resize(windowWidth/3, 0);
image(flower_2, windowWidth*.25, windowHeight*.7);
pop();

push();
tint(reds[2], greens[2], blues[2], 255);
flower_3.resize(windowWidth/3, 0);
image(flower_3, windowWidth*.25, windowHeight*.7);
pop();

push();
tint(reds[3], greens[3], blues[3], 255);
flower_4.resize(windowWidth/3, 0);
image(flower_4, windowWidth*.25, windowHeight*.7);
pop();

push();
tint(reds[0], greens[0], blues[0], 255);
flower_1.resize(windowWidth/3, 0);
image(flower_1, windowWidth*.25, windowHeight*.7);
pop();

push();
tint(reds[4], greens[4], blues[4], 255);
flower_line.resize(windowWidth/3, 0);
image(flower_line, windowWidth*.25, windowHeight*.7);
pop();

//smaller flower image layers
push();
tint(reds[1], greens[1], blues[1], 255);
smflower_2.resize(windowWidth/6.5, 0);
image(smflower_2, windowWidth*.43, windowHeight*.8);
pop();

push();
tint(reds[2], greens[2], blues[2], 255);
smflower_3.resize(windowWidth/6.5, 0);
image(smflower_3, windowWidth*.43, windowHeight*.8);
pop();

push();
tint(reds[3], greens[3], blues[3], 255);
smflower_4.resize(windowWidth/6.5, 0);
image(smflower_4, windowWidth*.43, windowHeight*.8);
pop();

push();
tint(reds[0], greens[0], blues[0], 255);
smflower_1.resize(windowWidth/6.5, 0);
image(smflower_1, windowWidth*.43, windowHeight*.8);
pop();

push();
tint(reds[4], greens[4], blues[4], 255);
smflower_line.resize(windowWidth/6.5, 0);
image(smflower_line, windowWidth*.43, windowHeight*.8);
pop();

//displays inspirational quotes
push();
fill("#" + colD)
strokeWeight(5);
stroke("#" + colE)
textSize(windowWidth/45);
textAlign(CENTER);
text(quoteString, windowWidth/4, windowHeight/6, windowWidth/2);
pop();

//displays character prompts
push();
textFont("Courier New");
fill("#" + colD)
noStroke();
textSize(windowWidth/100);
textAlign(CENTER);
text(promptString, windowWidth/2.5, windowHeight/2, windowWidth/6);
pop();

//displays cat facts
push();
textFont("Playball");
fill("#" + colD)
noStroke();
textSize(windowWidth/115);
textAlign(CENTER);
text(catString, 0, windowHeight/3, windowWidth/1);
pop();
}


//callback
function gotData(data) {
  //console.log(data);
}

//converts RGB
//found here: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}



function draw() {

}
