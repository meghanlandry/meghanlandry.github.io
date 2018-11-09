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
var btnRS=1;
var out;
var nope = 'out.html'

function preload() {
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  var x = (windowWidth - width) /2;
  var y = (windowHeight - height) /2;
  cnv.position(x, y);

  video1 = createVideo(['assets/video1.mp4']);
  video1.size(0,0);
  video1.position(followX, followY)
  video1.style('right', '30%');

  video2 = createVideo(['assets/video2.mp4']);
  video2.size(0,0);
  video2.position(followX, followY)
  video2.style('left', '10%');
  video2.style('top', '5%');

  video3 = createVideo(['assets/video6.mp4']);
  video3.size(0,0);
  video3.position(followX, followY)
  video3.style('top', '45%');
  video3.style('left', '5%');

  video4 = createVideo(['assets/video4.mp4']);
  video4.size(0,0);
  video4.position(followX, followY)
  video4.style('top', '20%');
  video4.style('right', '20%');

  video5 = createVideo(['assets/video5.mp4']);
  video5.size(0,0);
  video5.position(followX, followY)
  video5.style('top', '25%' );

  video6 = createVideo(['assets/video3.mp4']);
  video6.size(0,0);
  video6.position(followX, followY)
  video6.style('top', '60%');
  video6.style('right', '60%');

  video7 = createVideo(['assets/video7.mp4']);
  video7.size(0,0);
  video7.position(followX, followY)
  video7.style('top', '50%');
  video7.style('right', '30%');

  mouseX = 100;
  mouseY = 100;
  imgBtn = createImg(IMG_URL, 'My Clickable Image');
  imgBtn.position(100, 100);

  out = createButton("I'm done. (Click to exit.)");
  out.position(-100,-100);
  out.mousePressed(awayAway);
}


function draw() {
    seekCursor();
    imgBtn.position(followX-50, followY-70);
    imgBtn.size(150, 150);
    imgBtn.mousePressed(togglePlayVid);
    if (btnRS > 1) {
      imgBtn.size(0, 0);
      out.size(100,100);
    }

}
function awayAway() {
  window.location.href="out.html";
}

function seekCursor() {
  if (followX < mouseX-2) {
    followX = followX + 2;
  }
  else if (followX >= mouseX+2) {
    followX = followX - 2;
  }
  else {
    followX = mouseX;
  }
  if (followY < mouseY-2) {
    followY = followY + 2
  }
  else if (followY > mouseY+2) {
    followY = followY - 2
  }
  else {
    followY = mouseY
  }
}

function togglePlayVid() {
  btnRS = btnRS+1;
  if (playing) {
    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();
    video6.pause();
    video7.pause();
    imgBtn.html('play');
  }else{

    }
    setTimeout(video,1000)
    setTimeout(videoOne,2000);
    setTimeout(videoTwo,4000);
    setTimeout(videoThree,6000);
    setTimeout(videoFour,8000);
    setTimeout(videoFive,10000);
    setTimeout(videoSix,12000);
    setTimeout(away,18000);

  }

function video() {
  video1.size(300, 400);
  video1.loop();
}

function videoOne() {
    video2.size(600, 500);
    video2.loop();
    ;
  }
function videoTwo() {
    video3.size(300, 500);
    video3.loop();
  }
function videoThree() {
    video4.size(330, 500);
    video4.loop();
  }
function videoFour() {
    video5.size(250, 500);
    video5.loop();
  }
function videoFive() {
    video6.size(500, 500);
    video6.loop();
  }
function videoSix() {
    video7.size(200, 500);
    video7.loop();
  }
function away() {
    out.position(0,0)
    out.style('top','70%');
    out.style('left','50%');
    out.size(600,600);
  }
