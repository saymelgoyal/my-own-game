var trackImg,track;
var subwayImg,subway;
var coin,coinImg;
var score=0;


function preload(){
  trackImg=loadImage("background.jpg");
  subwayImg=loadImage("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  coinImg=loadImage("coin.png");
}

function setup() {
  createCanvas(700,500);
  track=createSprite(100,200);
  track.addImage("track",trackImg);
  track.velocityY=4;
  track.scale=1;
  subway=createSprite(350,380,20,20);
  subway.addImage("subway",subwayImg);
  subway.scale=1;  
  coinsGroup=createGroup();
}

function draw() {
background(trackImg);

fill("red");
text("Score:" +score,550,100);
//console.log(score);
spawnCoins();
if(subway.isTouching(coinsGroup)){
 score=score+5; 
}
if(keyDown("left")){
  subway.velocityX=-2
}
if(keyDown("right")){
  subway.velocityX=2
}
if(coinsGroup.isTouching(subway)){
  coin.destroyEach();
}
if(track.y>400){
  track.y=height/3;
  }

  
  drawSprites();
} 
function spawnCoins(){
  if (frameCount % 60 === 0){
    var coin = createSprite(20,200);
    coin.addImage(coinImg);
    coin.x = Math.round(random(200,400));
    coin.scale = 0.6;
    coin.velocityY = 5;
    coinsGroup.add(coin);
  }
  
}