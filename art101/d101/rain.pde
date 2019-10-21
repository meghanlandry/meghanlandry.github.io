class Rain {
  float x = width/2;
  float y = 0;
  float fall = 5;

  float tr = 70;

  boolean falling = true;
  boolean bouncing = true;
  boolean b = false;

  void fall() {
    if (falling) {
      y += fall;
    } else if (bouncing) {
      if (tr>0) {
        tr -= 3;
      }
      stroke(255, 255, 255, tr);
      falling = false;
      y -= 5;
      x = x + random(-1, 1)*10;
    }
  }

  Rain(float locX, float locY) {
    x = locX;
    y = locY;
  }

  boolean falls() {
    return (y > 600);
  }



  void start() {
    strokeWeight(1);
    //stroke(255, 255, 255, 50);
    line(x, y, x, y+7);
  }
}
