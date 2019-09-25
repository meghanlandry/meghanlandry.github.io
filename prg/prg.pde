char a;
int b;
char c;
char d;
boolean e;
char f;
int g;
char h;
int t;
char i;

void setup() {
  size(600, 600);
  background(195, 190, 190);
  smooth();
  stroke(95,90,90);
  cursor(CROSS);
  key = 'h';
  b = (1);
  a = '1';
  c = '0';
  d = 'q';
  e = true;
  f = '1';
  g = (25);
  h = '0';
  t = (100);
  print("Press H for controls.");
  frameRate(60);
  }


void draw() {
  setC();
  setD();
  setE();
  setF();
  setG();
  setT();
  newCanvas();
  if(mousePressed) {
    newKeyChoice();
  }
  }

  // Changes tool******************************************************

  void newKeyChoice() {

      //Normal Brush
      if (key == '1' ) {
          frameRate(60);
          a = '1';
          strokeWeight(b);
          line(mouseX, mouseY, pmouseX, pmouseY);
      }


  //Cloud / Rain / Puddle Brush
      else if ((key == '2') && (mouseY < 200)) {
          a = '2';
          drawCloud();
    } else if
          ((key == '2') && (mouseY >= 200) && (mouseY <= 400)) {
          frameRate(g);
          a = '2';
          ellipse(mouseX, mouseY, 50, 50);
    } else if
          ((key == '2') && (mouseY > 400)) {
          frameRate(g);
          a = '2';
          ellipse(mouseX, mouseY, 100, 100);
        }

  //option 3
  else if ((key == '3') && (mouseY < 400)) {
      a = '3';
      fill(255);
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX-20, mouseY-20);
      vertex(mouseX, mouseY-40);
      endShape();
      } else if
      ((key == '3') && (mouseY >= 500) && (mouseY <= 550)) {
      a = '3';
      ellipse(mouseX, mouseY, 50, 50);
      } else if
      ((key == '3') && (mouseY > 550)) {
      a = '3';
      ellipse(mouseX, mouseY, 100, 100);
      }

  //option 4
  else if ((key == '4') && (mouseY < 200)) {
    a = '4';
    fill(255);
    beginShape();
    vertex(mouseX, mouseY);
    vertex(mouseX-20, mouseY-20);
    vertex(mouseX, mouseY-40);
    endShape();
    } else if
      ((key == '4') && (mouseY >= 200) && (mouseY <= 400)) {
      a = '4';
      fill(255);
      ellipse(mouseX, mouseY, 50, 50);
    } else if
      ((key == '2') && (mouseY > 400)) {
      a = '4';
      ellipse(mouseX, mouseY, 100, 100);
      }

//else {
// strokeWeight(b);
// line(mouseX, mouseY, pmouseX, pmouseY);
//}
}










//checks if Help key is pressed
void setE() {
  if (key == 'h') {
    f = '1';
    newKeyChoice();
    e = true;
    checkInstr();
    }
    }

//checks if help was used
void setF() {
  if (f > 0) {
  checkF();
  }
  }

//sets key back to what it was prior to accessing help
void checkF() {
  if ((f == '1') && (a == '1'))  {
    key = '1';
    f = '0';
   } else if
    ((f == '1') && (a == '2')) {
    key = '2';
    f = '0';
    }
    }

//pulls up Help window
void checkInstr() {
  if ((e == true) && (key == '1')) {
    javax.swing.JOptionPane.showMessageDialog(null, "Controls: H - HELP (Q,W,E - Color) (R - Erase) (A,S - Size) (1,2 - Brush) (Z,X - Spacing) (/ - Clear Canvas) (P - Save)");
  } else if (e== true) {
    key = 'i';
    javax.swing.JOptionPane.showMessageDialog(null,"Controls: H - HELP (Q,W,E - Color) (R - Erase) (A,S - Size) (1,2 - Brush) (Z,X - Spacing) (/ - Clear Canvas) (P - Save)");
    }
   }

//checks if user wants spacing changed
void setG() {
  if ((key == 'x') && (g >= (10)) && (a == '2')) {
    key = '2';
    h = '1';
    g = (g - 3);
    checkG();
} else if ((key == 'z') && (g <= (60)) && (a == '2')) {
    key = '2';
    h = '2';
    g = (g + 3);
    checkG();
} else if ((key == 'x') && (g < (10)) && (a == '2')) {
    h = '3';
    key = '2';
} else if ((key == 'z') && (g > (60)) && (a == '2')) {
    h = '3';
    key = '2';
  }
 }

//****************************
//notifies if user wants opacity changed
void setT() {
 if (key == 'd') {
   key = '2';
   t = (t - 10);
   i = '1';
   checkT();
 }
 else if ((key == 'f')) {
   key = '2';
   t = (t + 10);
   i = '2';
   checkT();
 }
 }

void checkT() {
  if (i > 0) {
  }
  }
//******************************

//notifies if user wants spacing changed
void checkG() {
  if (h > 0) {
    h = '0';
    frameRate(g);
    key = '2';
  }
}

//notifies if user wants stroke increased or decreased
void setC() {
  if (key == 's') {
    c= '1';
    checkStroke();
  } else if (key == 'a') {
    c= '2';
    checkStroke();
  }
}

//notifies if user wants color changed
void setD() {
  if (key == 'q') {
    d= '1';
    checkColor();
  } else if (key == 'w') {
    d= '2';
    checkColor();
  } else if (key == 'e') {
    d= '3';
    checkColor();
  } else if (key == 'r') {
    d= '4';
    checkColor();
  }
}


//increases or decreases stroke
void checkStroke() {
  if ((c=='2') && (a=='1') && (b < 1)) {
    key = '1';
    }
  else if ((c=='1') && (a=='1')) {
    key = '1';
    b = (b + 1);
  } else if ((c=='2') && (a=='1')) {
    key = '1';
    b = (b - 1);
  }
}

//changes color
void checkColor() {
  if ((d=='1') && (a=='1')) {
    key = '1';
    stroke(95, 90 ,90, t);
  } else if ((d=='2') && (a=='1')) {
    key = '1';
    stroke(255, 255, 255, t);
  } else if ((d=='3') && (a=='1')) {
    key = '1';
    stroke(255, 200, 200, t);
  } else if (d=='4') {
  key = '1';
    stroke(195, 190, 190, t);
  } else if ((d=='1') && (a=='2')) {
      key = '2';
      noStroke();
      fill(95, 90, 90, t);
  } else if ((d=='2') && (a=='2')) {
      key = '2';
      noStroke();
      fill(255, 255, 255, t);
  } else if ((d=='3') && (a=='2')) {
      key = '2';
      noStroke();
      fill(255, 200, 200, t);
    }
  }




void drawCloud() {
  beginShape();
  vertex(mouseX, mouseY);
  bezierVertex(mouseX-50, mouseY-100, mouseX+150, mouseY-100, mouseX+100, mouseY);
  bezierVertex(mouseX+50, mouseY-100, mouseX+250, mouseY-90, mouseX+200, mouseY+50);
  bezierVertex(mouseX+100, mouseY, mouseX+300, mouseY, mouseX+290, mouseY+75);
  vertex(mouseX+500, mouseY+100);
  vertex(mouseX-100, mouseY+100);
  vertex(mouseX, mouseY+75);
  bezierVertex(mouseX-100, mouseY+100, mouseX-100, mouseY-50, mouseX, mouseY-25);
  endShape();
}


void newCanvas() {
//save and reset
  if (key == '/' || key == '/') {
    background(195, 190, 190);
    key = '1';
  } else if (key == 'p' || key == 'P') {
    saveFrame("images/00sd_m-####.png");
    f = '1';
  }
}
