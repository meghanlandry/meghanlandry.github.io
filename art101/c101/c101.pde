//NOTES:   I was going to add in something extra on keys 2, 3, and 4, but I couldn't come up with anything, so there are some unused things with those keys. 
//         Too afraid of breaking everything to add initials, please don't make me do this.

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
//saveFrame("Pictures/drawtool/drawtool-####.png");
}

// Changes tool******************************************************

void newKeyChoice() {

//Normal Brush
if (key == '1' ) {
frameRate(60);
a = '1';
strokeWeight(b);
stroke(r, rr, rrr, t);
line(mouseX, mouseY, pmouseX, pmouseY);
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
javax.swing.JOptionPane.showMessageDialog(null, "Controls: H - HELP (Q,W,E - Color) (R - Erase) (A,S - Size) (D,S - Opacity) (/ - Clear Canvas) (P - Save)");
} else if (e== true) {
key = 'i';
javax.swing.JOptionPane.showMessageDialog(null,"Controls: H - HELP (Q,W,E - Color) (R - Erase) (A,S - Size) (D,S - Opacity) (/ - Clear Canvas) (P - Save)");
}
}


//checks if user wants spacing changed ***************************************************

//notifies if user wants spacing changed
//useless
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

//increases or decreases stroke
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


void newCanvas() {
//save and reset
if (key == '/') {
background(195, 190, 190);
key = '1';
} else if (key == 'p') {
saveFrame("saves/####.png");
f = '1';
print(" Image Saved.");
}
}
