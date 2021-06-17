var tom, coin, bag;
var tomImage, coinImage, bagImage;
var bgImage, bg;
var ground;
var velocityX = 1;
var velocityY = 2;
var angle = 0;

function preload() {
  bgImage = loadImage("images/background.png");
  tomImage = loadAnimation("images/tom.gif", "images/tom.gif", "images/tom.gif", "images/tom.gif");
  coinImage = loadImage("images/coin.png");
  
}

function setup() {
  createCanvas(600, 300);

  tom = createSprite(150, 280, 20, 20);
  tom.addAnimation("tomrunning", tomImage);
  tom.scale = 0.5;

  ground = createSprite(0, 280, 600, 10);
  ground.visible = true;
  
}

function draw() {
  background(0);

  tom.collide(ground);

  drawSprites();

}