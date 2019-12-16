function Intro() {
  this.setup = function() {
    rectMode(CENTER);
    background(240);
    noStroke();
    fill(255, 214, 214);
    rect(windowHeight / 2, windowHeight / 2, windowHeight / 3, windowHeight / 1.5);
    fill(255);
    circle(windowHeight / 1.6, windowHeight / 2, windowHeight / 45)
  }

  this.draw = function() {
    rectMode(CENTER);
    background(240);
    noStroke();
    fill(255, 214, 214);
    rect(windowHeight / 2, windowHeight / 2, windowHeight / 3, windowHeight / 1.5);
    fill(255);
    circle(windowHeight / 1.6, windowHeight / 2, windowHeight / 45)

    this.keyPressed = function() {
      if (key === "w") {
        current = "intro";
        this.sceneManager.showScene(Home);
      }
    }
    this.mousePressed = function() {
      varPrev = "intro";
      this.sceneManager.showScene(Help);
    }
  }
}
