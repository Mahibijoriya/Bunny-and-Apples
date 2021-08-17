var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprites= Math.round(random(1,2,3,4))

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage= loadImage ("apple.png")
  leavesImage= loadImage ("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;
  

  drawSprites();

  if (frameCount % 80 == 0){
    if (select_sprites == 1 || 2){
      createApples();
    }
    else{
      createLeaves();
    }
  }

  if (frameCount % 20 == 0){
    if (select_sprites == 3 || 4){
      createLeaves();
    }
    else{
    createApples();
    }
  }

  
 
}




  
 


function createApples(){
apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImage);
apple.scale=0.05;
apple.velocityY=5;
apple.lifetime=60
}

function createLeaves(){
  leaves=createSprite(random(50,350),40, 10, 10);
  leaves.addImage(leavesImage);
  leaves.scale=0.02
  leaves.velocityY=3
  leaves.lifetime=60

}
