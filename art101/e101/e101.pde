ArrayA a;
ArrayB b;
ArrayC c;

ArrayList<ArrayA> ellipses;
ArrayList<ArrayB> rects;
ArrayList<ArrayC> lines;

void setup() {
  size(1000, 1000);
  background(200);
  ellipses = new ArrayList<ArrayA>();
  rects = new ArrayList<ArrayB>();
  lines = new ArrayList<ArrayC>();
 
}

void draw() {
  background(200);
  
  //a
    ellipses.add(new ArrayA(random(1000), random(1000)));
  for (ArrayA a : ellipses) {
    if (a.does2A()) {
      a.doingA = false;
    }
    a.doesA();
    a.startA();
  }
  
  //b
    rects.add(new ArrayB(random(1000), random(1000)));
  for (ArrayB b : rects) {
    if (b.does2B()) {
            b.doingB = false;
    }
    b.doesB();
    b.startB();
  }

  //c
  lines.add(new ArrayC(random(1000), random(1000)));
  for (ArrayC c : lines) {
    if (c.does2C()) {
            c.doingC = false;
    }
    c.doesC();
    c.startC();
  }
  

}
