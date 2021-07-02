var fireblue_moving, bluefire;
var background1, backgroundImage;
var firered_moving, redfire;
var firepink_moving, pinkfire;
var player, playerImage;
var a
var player1,
  player11,
  player2,
  player22,
  player3,
  player33,
  player4,
  player44,
  player5,
  player55,
  player6,
  player66,
  player7,
  player77,
  player8;
var weapon4 = 0
var weapon1,weapon11_moving,weapon2,weapon22,weapon33,weapon44,weapon55,weapon66
var back2
var click,click1,clicks
var write, writee,backdis;
var greenfire, greenImage;
var pinkGroup, blueGroup, redGroup, fireGroup;
var count = 0;
var score = 0;
var LEVEL1 = 3;
var DISPLAYS = 5;
var DISPLAY = 4;
var SERVE = 2;
var PLAY = 1;
var END = 0;
var gameState = SERVE;
var over, overImage;
var restart, restartImage;
var invisibleground, ground2;
var oversound, bust, press;
var backsong;
var change, gange;
var  timer = 0

function preload() {
  // weaponimg_moving = loadAnimation("hope.png","hope2.png","hope3.png")
  
weapon11_moving = loadAnimation("weapon6.png","weapon7.png","weapon8.png")
  weapon33_moving = loadAnimation("weapon4.png","weapon5.png")
  weapon22 = loadImage("weapon9.png")
  weapon33 = loadImage("weapon11.png")
  weapon44 = loadImage("weapon10.png")
  weapon55 = loadImage("weapon33.png")
  clicks = loadImage("unnamed.png")
  weapon66 = loadImage("output-onlinepngtools (10).png")
  back2 = loadImage("photo-1579546929662-711aa81148cf.jpg")
  player11 = loadImage("output-onlinepngtools - 2021-06-12T100546.302.png");
  click1 = loadImage("1.PNG")
  gange = loadImage("output-onlinepngtools - 2021-06-12T110422.309.png");
  backdis = loadImage("Capture.PNG")
  player22 = loadImage("output-onlinepngtools - 2021-06-12T091254.770.png");
  player33 = loadImage("output-onlinepngtools - 2021-06-12T091236.278.png");
  player44 = loadImage("output-onlinepngtools - 2021-06-12T091138.457.png");
  player55 = loadImage("output-onlinepngtools - 2021-06-12T091128.263.png");
  player66 = loadImage("output-onlinepngtools - 2021-06-12T101848.498-1.png");
  player77 = loadImage("output-onlinepngtools - 2021-06-12T101837.976.png");
  writee = loadImage("output-onlinepngtools - 2021-06-12T103742.711.png");
  restartImage = loadImage("restart.png");
  overImage = loadImage("gameover.png");
  fireblue_moving = loadAnimation(
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png"
  );
  backgroundImage = loadImage("288-2888468_preview.png");
  firered_moving = loadAnimation(
    "1-1.png",
    "2-1.png",
    "3-1.png",
    "4-1.png",
    "5-1.png",
    "6-1.png"
  );
  firepink_moving = loadAnimation(
    "1-2.png",
    "2-2.png",
    "3-2.png",
    "4-2.png",
    "5-2.png",
    "6-2.png"
  );
  playerImage = loadImage("jvnq0p8wdqn51.png");
  greenImage_moving = loadAnimation(
    "Effects_Fire_0_01.png",
    "Effects_Fire_0_04.png",
    "Effects_Fire_0_06.png",
    "Effects_Fire_0_07.png",
    "Effects_Fire_0_11.png",
    "Effects_Fire_0_22.png"
  );
  oversound = loadSound("gameOver.mp3");
  bust = loadSound("bomb.wav");
  press = loadSound("jump.mp3");
  backsong = loadSound("swoosh1.mp3");
  fireringImg = loadImage("firering.png")
}

function setup() {
  canvas = createCanvas(1200, 800);

  background1 = createSprite(300, 150, 100, 100);
  background1.addImage(backgroundImage);

  background1.scale = 0.5;

  player = createSprite(100, 200, 10, 10);
  player.addImage(playerImage);
  player.scale = 0.2;
  player.setCollider("circle",0,0,140)

  player1 = createSprite(120, 90, 10, 10);
  player1.addImage(player22);
  player1.scale = 0.15;
  player1.setCollider("circle",0,0,140)

  player2 = createSprite(300, 90, 10, 10);
  player2.addImage(player33);
  player2.scale = 0.24;
  player2.setCollider("circle",0,0,140)

  player3 = createSprite(500, 90, 10, 10);
  player3.addImage(player44);
  player3.scale = 0.24;
  player3.setCollider("circle",0,0,140)

  player4 = createSprite(672, 93, 10, 10);
  player4.addImage(player55);
  player4.scale = 0.29;
  player4.setCollider("circle",0,0,140)

  player5 = createSprite(120, 250, 10, 10);
  player5.addImage(playerImage);
  player5.scale = 0.25;
  player5.setCollider("circle",0,0,140)

  player6 = createSprite(300, 240, 10, 10);
  player6.addImage(player11);
  player6.scale = 0.26;
  player6.setCollider("circle",0,0,140)

  player7 = createSprite(500, 230, 10, 10);
  player7.addImage(player66);
  player7.scale = 0.33;
  player7.setCollider("circle",0,0,140)

  write = createSprite(400, 365, 500, 80);
  write.addImage(writee);
  write.scale = 0.4;

  player8 = createSprite(690, 240, 10, 10);
  player8.addImage(player77);
  player8.scale = 0.29;

  change = createSprite(398, 52, 10, 10);
  change.addImage(gange);
  change.scale = 0.1;

  over = createSprite(300, 150, 20, 20);
  over.addImage(overImage);

  restart = createSprite(300, 200, 20, 20);
  restart.addImage(restartImage);
  restart.scale = 0.4;
  
  click = createSprite(500,300,20,20)
  click.addImage(clicks)
  click.scale = 0.5

  skill1 = createSprite(100,50,10,10)
  skill1.visible = false
  //skill1.addImage(fireringImg)
  //skill1.scale = 0.1
 
  firering =createSprite(120, 250, 10, 10)
  firering.addImage(fireringImg)
  firering.visible =false
  firering.scale=0.25

  invisibleground = createSprite(300, 310, 600, 10);

  ground2 = createSprite(300, 6, 600, 10);

  pinkGroup1 = createGroup();
  pinkGroup = createGroup();
  blueGroup1 = createGroup();
  blueGroup = createGroup();
  redGroup = createGroup();
  redGroup1 = createGroup();
  fireGroup = createGroup();
}

function draw() {
  background("white");
  player.collide(invisibleground);
  player.collide(ground2);

  if (gameState === SERVE) {
    score = 0;
    background1.velocityX = 0;
    background1.addImage(back2)
    background1.changeImage(back2)
    background1.scale = 1.2
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    player.visible = false;
    click.visible = false;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = true;
    change.visible = false;
    player1.visible = true;
    player2.visible = true;
    player3.visible = true;
    player4.visible = true;
    player5.visible = true;
    player6.visible = true;
    player7.visible = true;
    player8.visible = true;

    if (mousePressedOver(player1)) {
      gameState = DISPLAYS;
    }
    if (mousePressedOver(player2)) {
      player.addImage(player33);
      weapon4 = 2
      player.scale = 0.24;
      gameState = PLAY;
    }
    if (mousePressedOver(player3)) {
      player.addImage(player44);
      weapon4 = 3
      player.scale = 0.24;
      gameState = PLAY;
    }
    if (mousePressedOver(player4)) {
      gameState = DISPLAY;
      
    }
    if (mousePressedOver(player5)) {
      player.addImage(playerImage);
      weapon4 = 5
      player.scale = 0.2;
      skill1.visible = true
      
      gameState = PLAY;
    }
    
    if (mousePressedOver(player6)) {
      player.addImage(player11);
      weapon4 = 6
      player.scale = 0.2;
      gameState = PLAY;
    }
    if (mousePressedOver(player7)) {
      player.addImage(player66);
      weapon4 = 7
      player.scale = 0.29;
      gameState = PLAY;
    }
    if (mousePressedOver(player8)) {
      player.addImage(player77);
      weapon4 = 8
      player.scale = 0.2;
      gameState = PLAY;
    }
      
  }
  if(gameState === DISPLAY){
    player.addImage(player55);
    
    player.scale = 0.29; 
       
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(backdis)
    background1.changeImage(backdis)
    background1.scale = 1
        if (mousePressedOver(click)) {
          gameState = PLAY;
          weapon4 = 4
        }
    }
  if(gameState === DISPLAYS){
    player.addImage(player22);
    player.scale = 0.15;
    player.visible = false;
    click.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    change.visible = false;
    player1.visible = false;
    player2.visible = false;
    player3.visible =false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;
    background1.addImage(click1)
    background1.changeImage(click1)
    background1.scale = 1
        if (mousePressedOver(click)) {

          gameState = PLAY;
          weapon4 = 1
        }
    }
    //play state
  if (gameState === PLAY) {

    score = score + Math.round(getFrameRate() / 60);
     background1.addImage(backgroundImage)
     background1.changeImage(backgroundImage)
    background1.scale = 0.5
    if (score === 500) {
      gameState = LEVEL1;
    }
    //Skill for player5
    if(mousePressedOver(skill1)){
      firering.visible = true
      skill1.visible = false
      a=1
     }
     if(a==1){
      timer=timer+0.01
      a=0
     }
     if(timer===20){
       firering.destroy()
     }
     console.log(timer)
    
      if(pinkGroup.isTouching(firering)){
        pinkGroup.destroyEach()
        pinkGroup1.destroyEach()
        blueGroup.destroyEach()
        blueGroup1.destroyEach();
        redGroup1.destroyEach();
        redGroup.destroyEach();
      }
    
    //changing the animations  
    if (mousePressedOver(change) && count == 0) {
      press.play();
      count = count + 3;
      change.visible = false;
      gameState = SERVE;
    }
    if (count === 3) {
      change.destroy();
    }

    if (fireGroup.isTouching(pinkGroup)) {
      fireGroup.destroyEach();
      pinkGroup.destroyEach();
    }
    if (fireGroup.isTouching(pinkGroup1)) {
      fireGroup.destroyEach();
      pinkGroup1.destroyEach();
    }
    if (fireGroup.isTouching(blueGroup)) {
      fireGroup.destroyEach();
      blueGroup.destroyEach();
    }
    if (fireGroup.isTouching(blueGroup1)) {
      fireGroup.destroyEach();
      blueGroup1.destroyEach();
    }
    if (fireGroup.isTouching(redGroup)) {
      fireGroup.destroyEach();
      redGroup.destroyEach();
    }
    if (fireGroup.isTouching(redGroup1)) {
      fireGroup.destroyEach();
      redGroup1.destroyEach();
    }
    if (background1.x < 100) {
      background1.x = 400;
    }

    background1.velocityX = -(7 + (7 * score) / 100);

    player.visible = true;
    over.visible = false;
    restart.visible = false;
    invisibleground.visible = false;
    ground2.visible = false;
    write.visible = false;
    click.visible = false;
    change.visible = true;
    player1.visible = false;
    player2.visible = false;
    player3.visible = false;
    player4.visible = false;
    player5.visible = false;
    player6.visible = false;
    player7.visible = false;
    player8.visible = false;

    cyan();
    red2();
    pink2();
    cyan2();
    redba();
    redba1();
  }
  if (gameState === LEVEL1) {
  }
  if (gameState === PLAY) {
    if (keyWentDown("up")) {
      player.velocityX = 0;
      player.velocityY = -5;
    }
    if (keyWentUp("up")) {
      player.velocityX = 0;
      player.velocityY = 0;
    }
    if (keyWentDown("down")) {
      player.velocityX = 0;
      player.velocityY = 5;
    }
    if (keyWentUp("down")) {
      player.velocityX = 0;
      player.velocityY = 0;
    }

    if (keyDown("space")) {
      backsong.play();
      shoot();
    }
  }
  
  
  

  if (gameState === END) {
    if (mousePressedOver(restart)) {
      reset();
      press.play();
    }
    background1.velocityX = 0;
    player.visible = false;
    over.visible = true;
    restart.visible = true;
    click.visible = false;
    write.visible = false;
    invisibleground.visible = false;
    change.visible = false;
  }

  if (player.isTouching(pinkGroup)) {
    bust.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    oversound.play();
    gameState = END;
  }

  if (player.isTouching(pinkGroup)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(pinkGroup1)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(blueGroup)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(blueGroup1)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(redGroup1)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }
  if (player.isTouching(redGroup)) {
    gameState = END;
    oversound.play();
    pinkGroup.destroyEach();
    blueGroup.destroyEach();
    redGroup.destroyEach();
    pinkGroup1.destroyEach();
    blueGroup1.destroyEach();
    redGroup1.destroyEach();
    bust.play();
  }

  drawSprites();
if (gameState === PLAY){
  stroke("cyan");
  fill("cyan");

  text(mouseX + "," + mouseY, mouseX, mouseY);
  text("score:" + score, 450, 50);
}
  
}

function cyan() {
  if (frameCount % 180 === 0) {
    bluefire = Math.round(random(600, 500));
    bluefire = createSprite(600, 100, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4;
    bluefire.velocityX = -(4 + score / 100);

    bluefire.lifetime = 150;

    blueGroup.add(bluefire);
  }
}

function red2() {
  if (frameCount % 180 === 0) {
    pinkfire = createSprite(600, 200, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4;
    pinkfire.velocityX = -(4 + score / 100);
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150;

    pinkGroup.add(pinkfire);
  }
}

function pink2() {
  if (frameCount % 180 === 0) {
    pinkfire = createSprite(600, 300, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4;
    pinkfire.velocityX = -(4 + score / 100);
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150;

    pinkGroup1.add(pinkfire);
  }
}

function cyan2() {
  if (frameCount % 180 === 0) {
    bluefire = Math.round(random(600, 500));
    bluefire = createSprite(600, 200, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4;
    bluefire.velocityX = -(4 + score / 100);

    bluefire.lifetime = 150;
    blueGroup1.add(bluefire);
  }
}

function redba() {
  if (frameCount % 180 === 0) {
    redfire = Math.round(random(600, 500));
    redfire = createSprite(600, 200, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4;
    redfire.velocityX = -(4 + score / 100);

    redfire.lifetime = 150;

    redGroup.add(redfire);
  }
}

function redba1() {
  if (frameCount % 180 === 0) {
    redfire = Math.round(random(600, 500));
    redfire = createSprite(600, 50, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4;
    redfire.velocityX = -(4 + score / 100);

    redfire.lifetime = 150;

    redGroup1.add(redfire);
  }
}

function shoot() {
  greenfire = createSprite(100, 100, 5, 10);
  greenfire.velocityX = 6;
  greenfire.y = player.y;
  greenfire.lifetime = 100;
if(weapon4 === 3){
  greenfire.addAnimation("moving1",weapon11_moving)
  greenfire.scale = 0.5
}else if (weapon4 === 5){greenfire.addAnimation("moving", greenImage_moving)}else if(weapon4 === 4){
  greenfire.addImage(weapon22)
  greenfire.scale = 0.5
}else if(weapon4 === 7){
  greenfire.addAnimation("moving2",weapon33_moving)
  greenfire.scale = 0.7}else if(weapon4 === 1){
  greenfire.addImage(weapon55)
  greenfire.scale = 0.5 }else if(weapon4 === 6){
  greenfire.addImage(weapon44)
  greenfire.scale = 0.2}else if(weapon4 === 8){
  greenfire.addImage(weapon33)
  greenfire.scale = 0.2}else if(weapon4 === 2){
  greenfire.addImage(weapon66)
  greenfire.scale = 0.4}
  
  fireGroup.add(greenfire);

}
function shoot2() {
  weapon = createSprite(100, 100, 5, 10);
  weapon.velocityX = 6;
  weapon.addAnimation("moving", weaponimg_moving);
}
function reset() {
  gameState = PLAY;
  over.visible = false;
  restart.visible = false;
  pinkGroup.destroyEach();
  blueGroup.destroyEach();
  redGroup.destroyEach();
  pinkGroup1.destroyEach();
  blueGroup1.destroyEach();
  redGroup1.destroyEach();
  score = 0;
}
