function Home() {

  this.setup = function() {
    background(80);

  }

  this.draw = function() {
    if (remainingCatsLake === 0 && remainingCatsForest === 0 && remainingCatsGarden === 0 && new_cats === 0){
      deliveredCats = 11
    }
    if (deliveredCats === 11) {
      end_sound.play();
      this.sceneManager.showScene(Win);
    }

    imageMode(CENTER);

    background(80);
    for(i = 0; i < new_cats; i++){
      image(cat_icon, windowHeight*((i+1)*.1), windowHeight*.1 );
    }
    if (remainingCatsLake > 0) {
      image(lake_icon, windowHeight * .1, windowHeight / 2);
    } else {
      image(lake_iconb, windowHeight * .1, windowHeight / 2);
    }
    if (remainingCatsGarden > 0) {
      image(garden_icon, windowHeight / 2, windowHeight * .9);
    } else {
      image(garden_iconb, windowHeight / 2, windowHeight * .9);
    }
    if (remainingCatsForest > 0) {
      image(forest_icon, windowHeight * .9, windowHeight / 2);
    } else {
      image(forest_iconb, windowHeight * .9, windowHeight / 2);
    }
    if (happy_witch === false) {
      animation(idleWitch, windowHeight / 2, windowHeight / 3);
    } else {
      animation(happyWitch, windowHeight / 2, windowHeight / 3);
    }
    this.keyPressed = function() {
      switch (key) {
        case "w":
          if (new_cats > 0) {
            give_sound.play();
            happy_witch = true;
            new_cats--;
          }
          break;
        case "a":
          lake_cat = true;
          this.sceneManager.showScene(Lake);
          break;
        case "s":
          garden_cat = true;
          this.sceneManager.showScene(Garden);
          break;
        case "d":
          forest_cat = true;
          this.sceneManager.showScene(Forest);
          break;
        case " ":
          if (new_cats > 0) {
            give_sound.play();
            happy_witch = true;
            new_cats--;
            deliveredCats++;
          }
      }
    }
  }
  this.mousePressed = function() {
    varPrev = "home";
    this.sceneManager.showScene(Help);
  }
}
