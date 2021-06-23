var startingImg, rocketImg, spaceImg, asteroidImg
var player
var gameState = "start"
var score = 0

var asteroidGroup;

function preload(){

  startingImg = loadImage("images/solar system.jpg");
  rocketImg = loadImage("images/rocket1.png");
  spaceImg = loadImage("images/space bg.jpg");
  asteroidImg = loadImage("images/meteor.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  player = createSprite(width/2 , height/3 , 5 , 5)
  player.addImage("pl", rocketImg);
  player.scale = 0.4
  

asteroidGroup  = new Group()
asteroidGroup
}

function draw() {
  //background('skyblue');  
 
  if(gameState === "start"){
    startGame()
  }

  if(gameState === "level1"){
    level1()
  }

  /*if(gameState === "level2"){
    level2()
  }
 
  if(gameState === "level3"){
    level3()
    
  }*/

  player.x = mouseX
  player.y = mouseY

  if(player.isTouching(asteroid)){
  }


  drawSprites();
}


function startGame(){

  background(startingImg)

  textSize(50)
  fill("orange")
  text("SOLAR RUN", width/2 - 60, 90)
  if(keyWentDown("SPACE") && gameState === "start"){

    gameState = "level1"

  }

}
function level1(){


background("pink")
/*if(keyWentDown("SPACE") && gameState === "level1"){

  gameState = "level2"

}*/

if(frameCount%60 === 0){

  var asteroid = createSprite(500,-10,5,5)
  asteroid.addImage("collision", asteroidImg)
asteroid.velocityY = 5
asteroid.x = Math.round(random(100, width-100))
asteroid.scale = 0.2

asteroidGroup.add(asteroid)
  
}






}
/*function level2(){


  background("yellow")

  if(keyWentDown("SPACE") && gameState === "level2"){
  
    gameState = "level3"
  
  }
  
  }

  function level3(){


    background("red")
    if(keyWentDown("SPACE") && gameState === "level3"){
    
      //gameState = "level3"
    
    }
    
    }*/