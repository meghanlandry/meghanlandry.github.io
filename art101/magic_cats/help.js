function Help() {

  this.setup = function() {
    background(235);
  }

  this.draw = function() {
    background(240);
    imageMode(CENTER);
    image(help_icons, windowHeight/2, windowHeight/2)


    this.keyPressed = function() {
      switch (varPrev) {
        case "home":
        this.sceneManager.showScene(Home);
        break;
        case "garden":
        this.sceneManager.showScene(Garden);
        break;
        case "lake":
        this.sceneManager.showScene(Lake);
        break;
        case "forest":
        this.sceneManager.showScene(Forest);
        break;
        case "intro":
        this.sceneManager.showScene(Intro);
        break;
      }
    }
    this.mousePressed = function() {
      switch (varPrev) {
        case "home":
        this.sceneManager.showScene(Home);
        break;
        case "garden":
        this.sceneManager.showScene(Garden);
        break;
        case "lake":
        this.sceneManager.showScene(Lake);
        break;
        case "forest":
        this.sceneManager.showScene(Forest);
        break;
        case "intro":
        this.sceneManager.showScene(Intro);
        break;
      }
    }
  }
}
