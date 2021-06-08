const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImg,snow;

function preload(){
  bgImg= loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
//  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  drawSprites();
  snowfall();

}

function snowfall(){
  r=Math.round(random(50,750));
if(frameCount%60===0){
   snow=createSprite(r,20,20,20);
   snow.display();
}
}
