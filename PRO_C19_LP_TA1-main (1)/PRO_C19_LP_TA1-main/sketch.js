

var helicopter;
var bullet;
var hQ;
var armyDude, armyDudeImage;
var backGround;

function preload()
{
  armyDudeImage=loadImage("army1.png");
}

function setup() {
  createCanvas(400,400);


  armyDude=createSprite(200, 300, 10, 40);
  armyDude.addImage("army", armyDudeImage);
  armyDude.scale=0.2;
}


function draw() 
{
  background(51);
//  Engine.update(engine);
  drawSprites();
  
}
