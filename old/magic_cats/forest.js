function Forest() {
  let h1 = true;
  let h2 = true;
  let f1 = true;
  let f2 = true;
  let f3 = true;
  let r = 0;
  randomCat();

  //setup
  this.setup = function() {
    background(forest);
  }

  //draw loop
  this.draw = function() {

    background(forest);
    if (forest_cat === true) {
      randomCat();
    }
    forest_cat = false;
    displayCat();

    this.keyPressed = function() {
      if (key === "a") {
        happy_witch = false;
        this.sceneManager.showScene(Home);
      } else if (key === " ") {
        if (h1 === true && r === 1) {
          collect_sound.play();
          new_cats++;
          remainingCatsForest--;
          h1 = false;
        } else if (h2 === true && r === 2) {
          collect_sound.play();
          new_cats++;
          remainingCatsForest--;
          h2 = false;
        } else if (f1 === true && r === 3) {
          collect_sound.play();
          new_cats++;
          remainingCatsForest--;
          f1 = false;
        } else if (f2 === true && r === 4) {
          collect_sound.play();
          new_cats++;
          remainingCatsForest--;
          f2 = false;
        } else if (f3 === true && r === 5) {
          collect_sound.play();
          new_cats++;
          remainingCatsForest--;
          f3 = false;
        }

      }
    }

    this.mousePressed = function() {
      varPrev = "forest";
      this.sceneManager.showScene(Help);
    }
  }

  function randomCat() {
    if (h1 === true || h2 === true || f1 == true || f2 == true || f3 == true) {
      r = random(5);
      r = Math.ceil(r);
    }
  }

  //shows current cat
  function displayCat() {
    if (h1 === true && r === 1) {
      animation(unicorn, windowHeight / 2, windowHeight / 1.5);
    } else if (h2 === true && r === 2) {
      animation(pegasus, windowHeight / 1.2, windowHeight / 5);
    } else if (f1 === true && r === 3) {
      animation(fairy3, windowHeight / 4, windowHeight / 4);
    } else if (f2 === true && r === 4) {
      animation(fairy2, windowHeight / 2, windowHeight / 3);
    } else if (f3 === true && r === 5) {
      animation(fairy1, windowHeight / 1.5, windowHeight / 1.8);
    }
  }
}
