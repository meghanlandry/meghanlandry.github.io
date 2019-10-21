class Puddle {
  float x;
  float y;
  float x2;
  float y2;
  float r;
  float r2;

  float tr;
  float tr2;
  
 

  boolean fading = true;
  boolean fading2 = true;

  Puddle(float locX, float locY) {
    x = locX;
    y = locY;
    r = 1;
    r2 = 1;
    tr = 99;
    tr2 = 70;
  }

  void ripple() {

    if (fading) {
      r += 1;
      if (tr > 0) {
        tr -= 1;
      }
      stroke(255, 255, 255, tr);
    } else {
      stroke(255, 255, 255, 0);
    }
  }

  void ripple2() {

    if (fading2) {
      r2 += .5;
      if (tr2 > 0) {
        tr2 -= 1;
      }
      stroke(255, 230, 230, tr2);
    } else {
      stroke(255, 230, 230, 0);
    }
  }

  boolean fade () {
    return (r >= 150);
  }

  boolean fade2 () {
    return (r2 >= 120);
  }

  void start() {
    strokeWeight(1);
    noFill();
    ellipse(x, y, r*2, r);
  }
  
  void start2() {
    strokeWeight(1);
    noFill();
    newRipple();
  }
  
  void newRipple() {
  ellipse(x, y, r2*2, r2);
  }
}
