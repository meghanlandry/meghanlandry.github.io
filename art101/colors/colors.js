let a;
let b;
let c;
let palettes;

function preload(){
  //let url = "http://www.colourlovers.com/api/palettes/top&format=jsonp";
palettes = loadJSON("cl.json");

}

function setup() {

  console.log("cat.");
  noCanvas();
  a = palettes[0].colors[0];
  b = palettes[0].colors[1];
  c = palettes[0].colors[2];
  console.log(a + ", " + b + ", " + c);
}

function gotData(data){
  console.log("cat2.");
}

function draw() {

}
