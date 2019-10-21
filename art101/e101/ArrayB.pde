class ArrayB {
  float m;
  float n;
  float x;
  float y;


boolean doingB = true;

ArrayB(float locX, float locY) {
  x = locX;
  y = locY;
  m = 1;
  n = 1;
}

void doesB() {
  if (doingB) {
    x += 1;
    y += 1;
    m += 1;
    n += 1;
    stroke(m);
  }
}

boolean does2B() {
    return (m > 200);
  }

void startB() {
  strokeWeight(1);
  stroke(m);
  newShapeB();
}

void newShapeB() {
  rect(x, y, n, n);
}
}
