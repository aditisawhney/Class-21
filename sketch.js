var fixedRect, movingRect;

var as1, as2, as3, as4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  as1 = createSprite(100, 100, 10, 100);
  as1.shapeColor = "blue"
  as2 = createSprite(200,200,100,10);
  as2.shapeColor = "cyan"
  as3 = createSprite(300,300,20,100);
  as3.shapeColor = "magenta"
  as4 = createSprite(400,400,10,200);
  as4.shapeColor = "sky blue"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect, as3)) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}
  drawSprites();
}


