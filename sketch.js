var player, street, img;
var obstaclesGroup, goodGroup;

var score = 0;
//game states
var PLAY = 1;
var END = 0;
var gameState = PLAY;

let music;

function preload(){
  music = createAudio("music.mp3");

  img = loadImage("2.png");
  obstacle1 = loadImage("virus.png");
  obstacle2 = loadImage("nomoney.png");

  good1 = loadImage("mask.png");
  good2 = loadImage("meal.png");
  good3 = loadImage("smile1.jpg");

  
  playerABC = loadImage("point.jpg");
  
  
}

function setup() {
  
  createCanvas(500,700);
  //music.loop()
 // music = loadSound("music.mp3");

  street = createSprite(900,700)
  street.addImage("background picture",img);
  street.velocity = 10
  street.scale = 10
 
  
  //creating groups
  obstaclesGroup = new Group;
  goodGroup = new Group;
  
  player = createSprite(200, 500, 40 ,40);
  
  
  music.autoplay(true);
}



function draw() {
 background(0,255,255); 
 player.x = mouseX;
 //player.addImage(playerABC)
 //playerABC.scale = 0.2

 music.play();
  if (street.y < 0){
    street.y = street.width/2;
  }


  
  if(goodGroup.isTouching(player)){
    score = score + Math.round(getFrameRate()/60); 
     
  }

  if(obstaclesGroup.isTouching(player)){
    score = score - Math.round(getFrameRate()/60); 
     
  }
  
//camera.position.x = player.x;
 // camera.position.y = player.y;
  //console.log(player.y)

spawnObstacles();
spawnGoods()

 
  
  
  drawSprites();
  textSize(20)
  textFont()
  fill("black")
  text("Score: "+ score, 400,50);
 
}

//spawning objects
function spawnObstacles() {
  if(frameCount % 5 === 0) {
    var obstacle = createSprite(Math.round(random(1,449)), -5);
   
    obstacle.scale = 0.15;
    obstacle.setVelocity(0,10);
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;

    }
    
    obstaclesGroup.add(obstacle);

   // if(player.isTouching(obstaclesGroup)){
     // obstaclesGroup.destroyEach();
    //} 

    obstacle.lifetime = 175;
  }

  //console.log(frameCount);
//

}
function spawnGoods() {
  if(frameCount % 40 === 0) {
    var good = createSprite(Math.round(random(1,449)), -5);
   
    good.scale = 0.15;
    good.setVelocity(0,10);
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: good.addImage(good1);
              break;
      case 2: good.addImage(good2);
              break;
      case 3: good.addImage(good3);
              break;
      default: break;

    }
  good.lifetime = 175;
  goodGroup.add(good);

///if(player.isTouching(goodGroup)){
   //   goodGroup.destroyEach();
    //} 

  }
}