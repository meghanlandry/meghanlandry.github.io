function Win(){
  this.setup = function(){
    background(80);

    grade = createSprite(windowHeight/2, windowHeight/8);
    grade.addAnimation('credit', cat_icon, cat_icon);

  }

  this.draw = function(){
    background(80);
    animation(end, windowHeight/2,windowHeight/2.5);

    grade.onMousePressed = function(){
      give_sound.play();
    }
    drawSprites();
  }
}
