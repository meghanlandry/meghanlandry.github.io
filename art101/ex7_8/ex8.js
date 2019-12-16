var flower;
var cat;

function preload() {
  soundTest = loadSound("sound.mp3");
}

function setup() {
  createCanvas(800, 1000);
  background(100);
  var manager = new SceneManager();
  manager.wire();
  manager.addScene(Scene1);
  manager.addScene(Scene2);
  manager.showScene(Scene1);
}

function Scene1() {
  this.setup = function() {
    background(255, 214, 214);
  }
  this.draw = function() {
    background(255, 214, 214);
    this.mousePressed = function() {
      soundTest.play();
      this.sceneManager.showScene(Scene2);
    }
  }
}

function Scene2() {
  this.setup = function() {
    background(150);
  }
  this.draw = function() {
    background(150);
    this.mousePressed = function() {
      soundTest.play();
      this.sceneManager.showScene(Scene1);
    }
  }
}
