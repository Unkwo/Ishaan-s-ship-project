
var ship;
var ship_floating;
var sea;

function preload(){
sea = loadImage("sea.png");
ship_floating = loadAniamtion("ship-2.png","ship-1.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  ship = creatSprite(200,200,70,50);
  ship.loadAniamtion("ship_floating", floating );

  sea = createSprite(220,195,100,10);
  sea.addImage("sea.png",sea );

  if(sea.x>0){
    sea.width = sea.width/2;
  }
ship.scale = 0.5;
ship.x = 50;
  
}

function draw() {
  background("blue");
  sea.addImage("sea.png");
  


  console.log(ship.y);

  ship.collide(sea);
  drawSprites();
}