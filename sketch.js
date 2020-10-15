
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,300) ;
monkey=createSprite(80,200,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1

  
}


function draw() {
background("white");
   ground=createSprite(400,233,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
stroke("white");
  textSize(20);
  fill("black")
  text("survivalTime:"+survivalTime,200,50);
  survivalTime=Math.ceil(frameCount/frameRate())
  if(keyWentDown("space"))
    {
      monkey.velocityY=-12
    }
 monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);
   FoodGroup = new Group();
  obstaclesGroup = new Group();
spawnfood();
spawnObstacles();
drawSprites();

  
}
function spawnfood(){
 if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
}
  
}
function spawnObstacles(){
  if(frameCount % 300=== 0){

             var obstacle = createSprite(600,200,10,10);
 obstacle.velocityX=-3;
    
obstacle.addImage("obstacle",obstacleImage);
             obstacle.scale = 0.15;
  } 
}



