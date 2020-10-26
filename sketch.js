var player, street, img;
var obstaclesGroup, goodGroup;
var timer;

var score = 0;
//game states
var PLAY = 1;
var END = 0;
var Start = 3;
var gameState = Start;

let music;

function preload(){
  //music = loadSound("MyMusic.mp3");
  music = createAudio("MyMusic.mp3");

  img = loadImage("BG .jpg");
   
  //fontItalic = loadFont('assets/Italic.ttf');

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
 // music = loadSound("MyMusic.mp3");

  street = createSprite(900,700)
  street.addImage("background picture",img);
  street.scale = 2
  street.velocity = 10
  //street.scale = 10
  timer = 5500;
  //console.log(timer)
  //creating groups
  obstaclesGroup = new Group;
  goodGroup = new Group;
  

  player = createSprite(200, 500, 40 ,40);
  player.shapeColor = "black";
  
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


  
  if(gameState === PLAY && timer > 0){

   
    spawnObstacles();
    spawnGoods()

    if(goodGroup.isTouching(player)){
    score = score + Math.round(getFrameRate()/60); 
  }

    if(obstaclesGroup.isTouching(player)){
    score = score - Math.round(getFrameRate()/60); 
     
  }
timer = timer-1;


if(timer === 0){
  gameState = END;
}

//if( gameState)
}
//camera.position.x = player.x;
 // camera.position.y = player.y;
  //console.log(player.y)



 
  //console.log(player.depth)
  
  
  drawSprites();
  textSize(20)
  textFont()
  fill("black")
  text("Score: "+ score, 380,50);

  if(gameState === Start){

    text("Welcome to my game called 'SONDER'!!",70,150)
    text("Press 'UP' arrow to start.", 140,230)
    text("RULES:-", 60,300)
    text("~ Collect the foods, masks and smilies.",60,330)
    text("~ Dodge the virus and sadness to prevent",60,360)
    text("loss of points.",80,380)
text("~ Earn maximum points and wait till the end",60,410)
text("for a revelation!",80,430)



    if(keyIsDown(UP_ARROW)){
      gameState = PLAY;
    }
  }
 
  //textFont(fontItalic)
  


  if(gameState === END){
  
text("You scored " +score + " out of 300!",130, 200 )
text("But hold on! This game is the game of life", 70,250)
text("for many people during this pandemic.",80,280)
text("Now we know where we stand.",110,310)
text("Reflect, and DONATE. ", 150,400)

text("Created by: Kopal Kumar",250,650)
//text("But hold on, this game is the game of life for a many people")
  }

  
}//end 



//spawning objects
function spawnObstacles() {
  if(frameCount % 8=== 0) {
    var obstacle = createSprite(Math.round(random(1,449)), -5);
    //console.log(obstacle.depth)

obstacle.depth = player.depth -1;

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