
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup;
var obstacleGroup;
var score,ground;
var survivalTime=0;
var ground;
var jb;

function preload(){
  
  jb=loadImage("jb.jpg");
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(650,400);
  monkey=createSprite(80,400,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  score=0;
  survivalTime=1;
  
  ground=createSprite(400,400,900,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  score=0;
  
}


function draw() {
background(jb);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
 if(monkey.isTouching(obstacle)){
  ground.setVelocityEach(0);

 
  


  
  //set lifetime of the game objects so that they are never destroyed

  
 } 
}
 

 
  
  if(keyDown("space")){
    monkey.velocityY=-5;
    
    }
  
    
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
    monkey.velocityY=monkey.velocityY+0.3;
  monkey.collide(ground);

  camera.position.y=monkey.y;

      

  drawSprites();
    fill("white");
    text("score"+score,500,50);
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("survivalTime"+survivalTime,100,50);
  spawnBanana();
  obstacles();
  


 
function obstacles(){
  
  if (frameCount % 60 === 0) {
 
     obstacle = createSprite(400,350, 20, 25);
    obstacle.velocityX = -5
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 120;
    var rand =Math.round(random(1));
      switch(rand){
        case 1 :obstacle.addImage(obstacleImage);
            break;
            default:break;
      }
    obstacle.scale=0.2;
    obstacle.liftime=400;
    
  obstacleGroup.add(obstacle);
   }
 
}
function spawnBanana(){
  if(frameCount%60===0){
    banana=createSprite(600,100,40,10);
    banana.y=Math.round(random(100,300));
    banana.addImage(bananaImage);
    banana.scale=0.13;
    banana.velocityX=-5;
    
    banana.lifetime=400;
    banana.depth=banana.depth;
   banana.depth=banana.depth+1;
    
  
    
    bananaGroup.add(banana)
    
  }
}




