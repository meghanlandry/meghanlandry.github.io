//this file constructs particles

var fade = 10;

//sets up particles
function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 5; //how fast the lines travel, more likely to be gated by framerate

  //makes lines continuous
  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  //makes particles follow nearest invisible particle
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  //I wish I undestood vector particles well enough to understand what this does.
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  //displays the lines
  this.show = function() {
    this.fadeOut();

    //draws lines to render object to be displayed from main script
    spaceBase.stroke(255, 200, 200, floor(fade));
    spaceBase.strokeWeight(1);

    spaceBase.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    this.updatePrev();
  }

  //position
  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  //prevents particles from drawing actual lines
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }

//function for fading lines out
  this.fadeOut = function() {
    if (fade < 5) {
      fade = 10;
    } else if ((fade > -5) && (fade < 11)) {
       fade = (fade-0.0001);
    }
  }
}
