class ArrayC {
  float m;
  float n;
  float x;
  float y;


boolean doingC = true;

ArrayC(float locX, float locY) {
  x = locX;
  y = locY;
  m = 1;
  n = 1;
}

void doesC() {
  if (doingC) {
    x += 1;
    y += 1;
    m += 1;
    n += 1;
    stroke(m);
  }
}

boolean does2C() {
    return (m > 200);
  }

void startC() {
  strokeWeight(1);
  stroke(m);
  newShapeC();
}

void newShapeC() {
  line(x, y, n, n);
}
}
