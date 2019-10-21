class ArrayA {
  float m;
  float n;
  float x;
  float y;


boolean doingA = true;

ArrayA(float locX, float locY) {
  x = locX;
  y = locY;
  m = 1;
  n = 1;
}

void doesA() {
  if (doingA) {
    x += 1;
    y += 1;
    m += 1;
    n += 1;
    stroke(m);
  }
}

boolean does2A() {
    return (m > 200);
  }



void startA() {
  strokeWeight(1);
  stroke(m);
  newShapeA();
}

void newShapeA() {
  ellipse(x, y, n, n);
}
}
