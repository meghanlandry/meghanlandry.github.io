function Garden() {
  let p = true;
  let s = true;
  let d = true;
  let r = 0;
  randomCat();

  //setup
  this.setup = function() {
    background(garden);

  }

  //draw loop
  this.draw = function() {

    background(garden);
    if (garden_cat === true) {randomCat();}
    garden_cat = false;
    displayCat();


    this.keyPressed = function() {
      if (key === "w") {
        happy_witch = false;
        this.sceneManager.showScene(Home);
      } else if (key === " ") {
        if (p === true && r === 1) {
          collect_sound.play();
          new_cats++;
          remainingCatsGarden--;
          p = false;
        } else if (s === true && r === 2) {
          collect_sound.play();
          new_cats++;
          remainingCatsGarden--;
          s = false;
        } else if (d === true && r === 3) {
          collect_sound.play();
          new_cats++;
          remainingCatsGarden--;
          d = false;
        }

      }
    }

  this.mousePressed = function() {
    varPrev = "garden";
    this.sceneManager.showScene(Help);
  }
}

  function randomCat() {
    if (p === true || s === true || d == true) {
      r = random(3);
      r = Math.ceil(r);
    }
  }
  //shows current cat
  function displayCat(){
    if (p === true && r === 1) {
      animation(peonyCat, windowHeight / 2, windowHeight / 2.5);
    } else if (s === true && r === 2) {
      animation(sunflowerCat, windowHeight / 1.2, windowHeight / 2);
    } else if (d === true && r === 3) {
      animation(daisyCat, windowHeight / 5, windowHeight / 1.5);
    }
  }
}
