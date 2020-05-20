var object22, object11;

function setup() {
  createCanvas(1200,800);
  object22 = createSprite(400, 100, 50, 80);
  object22.shapeColor = "green";
  object22.debug = true;
  object11 = createSprite(400, 800,80,30);
  object11.shapeColor = "green";
  object11.debug = true;

  object11.velocityY = -5;
  object22.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 bounceOff(object11, object22);
  
  drawSprites();
}
function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}