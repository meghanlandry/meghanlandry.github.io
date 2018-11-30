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
char j;
int r;
int rr;
int rrr;
float k;

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
d = '2';
e = true;
f = '1';
g = (20);
h = '0';
t = (255);
r = (95);
rr = (90);
rrr = (90);
k = (1.0);
print("Press H for controls.");
// print(" Press C to show current settings.");
frameRate(60);
}


void draw() {
setC();
setD();
setE();
setF();
setG();
setT();
//setJ();
newCanvas();
if(mousePressed) {
newKeyChoice();
}
}

// Changes tool******************************************************

//void setJ() {
// if (key == 'c') {
// print(key, a, b, c, d, e, f, g, h, i, j, t);
// }
//}

void newKeyChoice() {

//Normal Brush
if (key == '1' ) {
frameRate(60);
a = '1';
strokeWeight(b);
stroke(r, rr, rrr, t);
line(mouseX, mouseY, pmouseX, pmouseY);
//print("r:", r, "rr:", rr, "rrr:", rrr, ". ");
}


//Cloud / Lightning / Rain / Puddle Brush
else if ((key == '2') && (mouseY < 175)) {
frameRate((g/2));
a = '2';
noStroke();
fill(r, rr, rrr, (t/2));
drawCloud();
} else if
((key == '2') && (mouseY >= 175) && (mouseY <= 250)) {
frameRate((g/2));
a = '2';
noStroke();
fill(r, rr, rrr, (t/4));
drawBolt();
} else if
((key == '2') && (mouseY > 250) && (mouseY <= 510)) {
frameRate(g);
a = '2';
strokeWeight(1);
fill(r, rr, rrr, (t/2));
drawRain();
} else if
((key == '2') && (mouseY > 510)) {
frameRate(g);
a = '2';
noStroke();
fill(r, rr, rrr, (t/2));
drawPuddle();
}

//Smoke / Ash / Fire Brush
else if ((key == '3') && (mouseY < 225)) {
frameRate((g/2));
a = '3';
noStroke();
fill(r, rr, rrr, (t/2));
drawSmoke();
} else if
((key == '3') && (mouseY >= 225) && (mouseY <= 400)) {
frameRate((g/2));
a = '3';
noStroke();
fill(r, rr, rrr, (t/4));
drawAsh();
} else if
((key == '3') && (mouseY > 400)) {
frameRate(g);
a = '3';
noStroke();
fill(r, rr, rrr, (t/2));
drawFire();
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
}


//checks if Help key is pressed *********************************************
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
if ((f == '1') && (a == '1')) {
key = '1';
f = '0';
} else if
((f == '1') && (a == '2')) {
key = '2';
f = '0';
} else if
((f == '1') && (a == '3')) {
key = '3';
f = '0';
}
}

//pulls up Help window
void checkInstr() {
if ((e == true) && (key == '1')) {
//javax.swing.JOptionPane.showMessageDialog(null, "Controls: H - HELP (Q,W,E - Color) (R - Erase) (A,S - Size) (1,2,3 - Brush) (D,S - Opacity) (Z,X - Spacing) (/ - Clear Canvas) (P - Save)");
} else if (e== true) {
key = 'i';
//javax.swing.JOptionPane.showMessageDialog(null,"Controls: H - HELP (Q,W,E - Color) (R - Erase) (A,S - Size) (1,2,3 - Brush) (D,S - Opacity) (Z,X - Spacing) (/ - Clear Canvas) (P - Save)");
}
}


//checks if user wants spacing changed ***************************************************

//notifies if user wants spacing changed
void checkG() {
if (h > 0) {
h = '0';
frameRate(g);
key = '2';
}
}

// changes spacing
void setG() {
if ((key == 'x') && (a == '1')) {
key = '1';
h = '0';
}else if ((key == 'z') && (a == '1')) {
key = '1';
h = '0';
} else if ((key == 'x') && (g >= (10)) && (a == '2')) {
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
} else if ((key == 'x') && (g >= (10)) && (a == '3')) {
key = '3';
h = '1';
g = (g - 3);
checkG();
} else if ((key == 'z') && (g <= (60)) && (a == '3')) {
key = '3';
h = '2';
g = (g + 3);
checkG();
} else if ((key == 'x') && (g < (10)) && (a == '3')) {
h = '3';
key = '3';
} else if ((key == 'z') && (g > (60)) && (a == '3')) {
h = '3';
key = '3';
}
}


//notifies if user wants opacity changed *****************************************************
void setT() {
if ((key == 'd') && (t >= (10)) && (a == '1')) {
key = '1';
t = (t - 5);
i = '1';
checkT();
} else if ((key == 'f') && (t <= (255)) && (a == '1')) {
key = '1';
t = (t + 5);
i = '2';
checkT();
} else if ((key == 'd') && (a == '1')) {
key = '1';
i = '0';
checkT();
} else if ((key == 'f') && (a == '1')) {
key = '1';
i = '0';
checkT();
} else if ((key == 'd') && (t >= (10)) && (a == '2')) {
key = '2';
t = (t - 5);
i = '1';
checkT();
} else if ((key == 'f') && (t <= (255)) && (a == '2')) {
key = '2';
t = (t + 5);
i = '2';
checkT();
} else if ((key == 'd') && (a == '2')) {
key = '2';
i = '0';
checkT();
} else if ((key == 'f') && (a == '2')) {
key = '2';
i = '0';
checkT();
} else if ((key == 'd') && (t >= (10)) && (a == '3')) {
key = '3';
t = (t - 5);
i = '1';
checkT();
} else if ((key == 'f') && (t <= (255)) && (a == '3')) {
key = '3';
t = (t + 5);
i = '2';
checkT();
} else if ((key == 'd') && (a == '3')) {
key = '3';
i = '0';
checkT();
} else if ((key == 'f') && (a == '3')) {
key = '3';
i = '0';
checkT();
} else if ((key == 'd') && (t >= (10)) && (a == '4')) {
key = '4';
t = (t - 5);
i = '1';
checkT();
} else if ((key == 'f') && (t <= (255)) && (a == '4')) {
key = '4';
t = (t + 5);
i = '2';
checkT();
} else if ((key == 'd') && (a == '4')) {
key = '4';
i = '0';
checkT();
} else if ((key == 'f') && (a == '4')) {
key = '4';
i = '0';
checkT();
}
}

void checkT() {
if (i > 0) {
i = '0';
checkColor();
}
}



//notifies if user wants size increased or decreased ***************************************************
void setC() {
if (key == 's') {
c= '1';
checkStroke();
} else if (key == 'a') {
c= '2';
checkStroke();
}
}

//increases or decreases stroke/size
void checkStroke() {
if ((c=='2') && (a=='1') && (b < 1)) {
key = '1';
} else if ((c=='1') && (a=='1')) {
key = '1';
b = (b + 1);
} else if ((c=='2') && (a=='1')) {
key = '1';
b = (b - 1);


} else if ((c == '2') && (a=='2') && (k > (0.2))){
key = '2';
k = (k - (0.1));
} else if ((c == '1') && (a=='2')){
key = '2';
k = (k + (0.1));
} else if ((c == '2') && (a=='2')){
key = '2';

} else if ((c == '2') && (a=='3') && (k > (0.2))) {
key = '3';
k = (k - (0.1));
} else if ((c == '1') && (a=='3')) {
key = '3';
k = (k + 0.1);
} else if ((c == '2') && (a=='3')) {
key = '3';


} else if ((c == '2') && (a=='4') && (k > (0.2))){
key = '4';
k = (k - (0.1));
} else if ((c == '1') && (a=='4')){
key = '4';
k = (k + (0.1));
} else if ((c == '2') && (a=='4')) {
key = '4';
}
}

//notifies if user wants color changed ***********************************************************
void setD() {
if (key == 'q') {
d='1';
r = (95);
rr = (90);
rrr = (90);
checkColor();
} else if (key == 'w') {
d= '2';
r = (255);
rr = (255);
rrr = (255);
checkColor();
} else if (key == 'e') {
d= '3';
r = (255);
rr = (200);
rrr = (200);
checkColor();
} else if (key == 'r') {
d = '4';
r = (195);
rr = (190);
rrr = (190);
checkColor();
}
}

//changes color
void checkColor() {
if ((d > 0) && (a=='1')) {
key = '1';
stroke(r, rr, rrr, t);
} else if ((d > 1) && (a=='2')) {
key = '2';
noStroke();
fill(r, rr, rrr, t);
} else if ((d > 1) && (a=='3')) {
key = '3';
noStroke();
fill(r, rr, rrr, t);
}else if ((d > 1) && (a=='4')) {
key = '4';
noStroke();
fill(r, rr, rrr, t);
}
}


void drawCloud() {
beginShape();
vertex(mouseX, mouseY);
bezierVertex(mouseX-50*k, mouseY-100*k, mouseX+150*k, mouseY-100*k, mouseX+100*k, mouseY);
bezierVertex(mouseX+50*k, mouseY-100*k, mouseX+250*k, mouseY-90*k, mouseX+200*k, mouseY+50*k);
bezierVertex(mouseX+100*k, mouseY, mouseX+300*k, mouseY, mouseX+290*k, mouseY+75*k);
vertex(mouseX+500*k, mouseY+100*k);
vertex(mouseX-100*k, mouseY+100*k);
vertex(mouseX, mouseY+75*k);
bezierVertex(mouseX-100*k, mouseY+100*k, mouseX-100*k, mouseY-50*k, mouseX, mouseY-25*k);
endShape();
}

void drawBolt() {
beginShape();
vertex(mouseX-10*k, mouseY);
vertex(mouseX+10*k, mouseY);
vertex(mouseX-50*k, mouseY+80*k);
vertex(mouseX+10*k, mouseY+80*k);
vertex(mouseX-60*k, mouseY+160*k);
vertex(mouseX-10*k, mouseY+90*k);
vertex(mouseX-70*k, mouseY+90*k);
endShape();
}

void drawRain() {
stroke(r, rr, rrr, (t/2));
line(mouseX, mouseY, mouseX+2*k, mouseY+7*k);
}

void drawPuddle() {
ellipse(mouseX, mouseY, 100*k, 20*k);
}

void drawSmoke() {
ellipse(mouseX, mouseY, 300*k, 100*k);
}

void drawAsh() {
triangle(mouseX, mouseY, mouseX+6*k, mouseY+1*k, mouseX-6*k, mouseY+6*k);
}

void drawFire() {
noStroke();
beginShape();
vertex(mouseX+10*k, mouseY-20*k);
bezierVertex(mouseX, mouseY+20*k, mouseX+50*k, mouseY+60*k, mouseX+50*k, mouseY+20*k);
bezierVertex(mouseX+70*k, mouseY+40*k, mouseX+70*k, mouseY+70*k, mouseX+50*k, mouseY+80*k);
bezierVertex(mouseX+50*k, mouseY+60*k, mouseX+30*k, mouseY+70*k, mouseX+30*k, mouseY+80*k);
bezierVertex(mouseX-30*k, mouseY+40*k, mouseX, mouseY, mouseX+10*k, mouseY-20*k);

endShape();
}


void newCanvas() {
//save and reset
if (key == '/') {
background(195, 190, 190);
key = '1';
} else if (key == 'p' || key == 'P') {
//saveFrame("Pictures/00sd_m-####.png");
f = '1';
//print(" Image Saved.");
}
}
