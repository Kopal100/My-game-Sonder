var player, street, img;


function preload(){
  img = loadImage("2.png");
  obstacle1 = loadImage("virus.png");
  obstacle2 = loadImage("nomoney.png");

  good1 = loadImage("mask.png");
  good2 = loadImage("meal.png");


}

function setup() {
  createCanvas(500,700);
  
  street = createSprite(900,700)
  street.addImage("background picture",img);
  street.velocity = 10
  street.scale = 10
  
  
  player = createSprite(200, 500, 40 ,40);
  
  
  
}



function draw() {
 background(0,255,255); 
 player.x = mouseX;
  

  if (street.y < 0){
    street.y = street.width/2;
  }
  
//camera.position.x = player.x;
 // camera.position.y = player.y;
  //console.log(player.y)

spawnObstacles();
spawnGoods()

  
  
  
  drawSprites();
}

//spawning objects
function spawnObstacles() {
  if(frameCount % 40 === 0) {
    var obstacle = createSprite(Math.round(random(1,449)), -5);
   
    obstacle.scale = 0.15;
    obstacle.setVelocity(0,4);
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;

    }
    obstacle.lifetime = 175;
  }

  //console.log(frameCount);
//

}
function spawnGoods() {
  if(frameCount % 40 === 0) {
    var good = createSprite(Math.round(random(1,449)), -5);
   
    good.scale = 0.15;
    good.setVelocity(0,4);
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: good.addImage(good1);
              break;
      case 2: good.addImage(good2);
              break;
      default: break;

    }
  good.lifetime = 175;
  }
}