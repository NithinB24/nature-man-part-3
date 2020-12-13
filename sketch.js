var normalnman,nman, nmanleft, nmanright, bg1,invisibleGround,nmanjump,nmanjumpL,nmanjumpR,ground,sgroundimg,sground,groundIMG;

function preload() {

  nmanleft = loadAnimation("left1.png", "left2.png");
  nmanright = loadAnimation("right1.png", "right2.png");
  bg1 = loadImage("forest.png");
  normalnman = loadAnimation("nman.png");
  nmanjump = loadAnimation("nmanJU.png");
  nmanjumpL = loadAnimation("nmanJL.png");  
  nmanjumpR = loadAnimation("nmanJR.png"); 
  groundIMG = loadImage("ground.png");
  sgroundimg = loadImage("sground.png");
}

function setup() {
  createCanvas(1200, 800);
  nman = createSprite(600, 700, 50, 50);
  nman.addAnimation("normalnman",normalnman)
  nman.addAnimation("right", nmanright);
  nman.addAnimation("left", nmanleft);
  nman.addAnimation("nmanjump",nmanjump);
  nman.addAnimation("nmanJL",nmanjumpL);
  nman.scale = 0.2
  nman.debug = true;
  nman.setCollider("rectangle",0,0,300,500);
  invisibleGround = createSprite(600, 750, 1200, 20);
  invisibleGround.visible = false;
  ground1 = createSprite(747,506,50,50);
  ground1.addImage("groundimg",groundIMG)
  ground1.scale = 0.05;
  ground1.debug = true;
  sground1 = createSprite(270,618,50,50);
  sground1.addImage("sgroungimg",sgroundimg);
  sground1.scale = 0.2;
  sground1.debug = true;
  ground2 = createSprite(220,372,50,50);
  ground2.addImage("groundimg",groundIMG)
  ground2.scale = 0.05;
  sground2 = createSprite(801,356,50,50);
  sground2.addImage("sgroungimg",sgroundimg);
  sground2.scale = 0.2;
}

function draw() {
  background(0);

  if (keyWentDown("left")) {
    nman.changeAnimation("left", nmanleft);
    //nman.x = nman.x - 10;
    nman.velocityX = -10;
  }

  if (keyWentDown("right")){
    nman.changeAnimation("right", nmanright)
    //nman.x = nman.x + 10;
    nman.velocityX = 10;
  }
  if (keyWentUp("left")||keyWentUp("right")||keyWentUp("up")){
     nman.changeAnimation("normalnman",normalnman)    
     nman.velocityX = 0;
  }
  
  if (keyWentDown("up")){
  nman.changeAnimation("nmanjump",nmanjump);
  nman.velocityY = -8;
  }

  nman.bounceOff(ground1);
  nman.bounceOff(ground2);
  nman.bounceOff(sground1);
  nman.bounceOff(sground2);

  nman.velocityY = nman.velocityY + 0.2;

  //if (keyWentDown("up")&&keyWentDown("left")){
  //nman.changeAnimation("nmanJL",nmanjumpL)
  //nman.velocityX = -10;
  //nman.velocityy = -20;
  //}

  nman.collide(invisibleGround);
  drawSprites();
  textSize(35);
  stroke(0);
  text(mouseX + ":" + mouseY,1000,100)
}