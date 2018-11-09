"use strict";

var video1;
var video2;
var video3;
var video4;
var video5;
var video6;
var video7;

var playing = false;
var imgBtn;
const IMG_URL = 'assets/button.png';
var followX;
var followY;
var cnv;

function preload() {
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  var x = (windowWidth - width) /2;
  var y = (windowHeight - height) /2;
  cnv.position(x, y);

  video1 = createVideo(['assets/video1.mp4']);
  video1.size(0,0);

  video2 = createVideo(['assets/video1.mp4']);
  video2.size(0,0);

  video3 = createVideo(['assets/video1.mp4']);
  video3.size(0,0);

  video4 = createVideo(['assets/video1.mp4']);
  video4.size(0,0);

  video5 = createVideo(['assets/video1.mp4']);
  video5.size(0,0);

  video6 = createVideo(['assets/video1.mp4']);
  video6.size(0,0);

  video7 = createVideo(['assets/video1.mp4']);
  video7.size(0,0);

  mouseX = 500;
  mouseY = 500;
  imgBtn = createImg(IMG_URL, 'My Clickable Image');
  imgBtn.position(500, 500);

}


function draw() {
    seekCursor();
    imgBtn.position(followX-50, followY-70);
    imgBtn.size(150, 150);
    imgBtn.mousePressed(togglePlayVid);
}

function seekCursor() {
  if (followX < mouseX-3) {
    followX = followX + 3;
  }
  else if (followX >= mouseX+3) {
    followX = followX - 3;
  }
  else {
    followX = mouseX;
  }
  if (followY < mouseY-3) {
    followY = followY + 3
  }
  else if (followY > mouseY+3) {
    followY = followY - 3
  }
  else {
    followY = mouseY
  }
}

function togglePlayVid() {

  if (playing) {
    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();
    video6.pause();
    video7.pause();
    imgBtn.html('play');
  } else {
    print("At least this is working.")
    video1.size(300, 400);
    video1.position(500, 500);

    video2.size(600, 500);
    video2.position(200,100);

    video3.size(600, 500);
    video3.position(200,100);

    video4.size(600, 500);
    video4.position(200,100);

    video5.size(600, 500);
    video5.position(200,100);

    video6.size(500, 500);
    video6.position(200,100);

    video7.size(600, 500);
    video7.position(200,100);

    video1.loop();
    video2.loop();
    video3.loop();
    video4.loop();
    video5.loop();
    video6.loop();
    video7.loop();


    video1.loop();
    video2.loop();
    imgBtn.html('pause');
  }
playing = !playing;
}
