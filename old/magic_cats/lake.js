function Lake() {
  let m1 = true;
  let m2 = true;
  let m3 = true;
  let r = 0;
  randomCat();

  //setup
  this.setup = function() {
    background(lake);
  }

  this.draw = function() {

    background(lake);
    if (lake_cat === true) {
      randomCat();
    }
    lake_cat = false;
    displayCat();

    this.keyPressed = function() {
      if (key === "d") {
        happy_witch = false;
        this.sceneManager.showScene(Home);
      } else if (key === " ") {
        if (m1 === true && r === 1) {
          collect_sound.play();
          new_cats++;
          remainingCatsLake--;
          m1 = false;
        } else if (m2 === true && r === 2) {
          collect_sound.play();
          new_cats++;
          remainingCatsLake--;
          m2 = false
        } else if (m3 === true && r === 3) {
          collect_sound.play();
          new_cats++;
          remainingCatsLake--;
          m3 = false
        }
      }
    }

    this.mousePressed = function() {
      varPrev = "lake";
      this.sceneManager.showScene(Help);
    }
  }

  function randomCat() {
    if (m1 === true || m2 === true || m3 == true) {
      r = random(3);
      r = Math.ceil(r);
      console.log(r);
    }
  }
  //shows current cat
  function displayCat() {
    if (m1 === true && r === 1) {
      animation(mermaid, windowHeight / 2, windowHeight / 2.5);
    } else if (m2 === true && r === 2) {
      animation(mermaid2, windowHeight / 1.2, windowHeight / 2);
    } else if (m3 === true && r === 3) {
      animation(selkie, windowHeight / 2.2, windowHeight / 1.5);
    }
  }
}
