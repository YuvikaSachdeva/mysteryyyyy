var gameState=4;
var score=0;
var door;
var livingroom;
var hauntedroom;
var hollywoodset;
var crimescene;
var tickmark;
var key;
var border;
var wheel,chair,chefshat,doll,duck,fish,pistol,wheel,steelbox,butterfly,broccoli,play,nextbutton,nextimage,keys;
var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;
var flag5=false;
var flag6=false;
var flag7=false;
var flag8=false;
var flag9=false;
var flag10=false;
var flag11=false;
var flag12=false;
var flag13=false;
var confetii,c1,c2,c3,c4,c5,c6,c7;
var diploma,hilighter,gloves,spectacles,xray,microscope,humanskull,dentaltool,wood;

function preload(){
door= loadImage('Images/door_temp.jfif');
livingroom= loadImage('Images/livingroomfinal.png');
hauntedroom=loadImage('Images/haunted room game.jpg');
hollywoodset=loadImage('Images/hollywood set game.jpg');
crimescene=loadImage('Images/crime.png');
tickmark=loadImage('Images/tickmark.png');
border=loadImage('Images/border.png');
borderwheel=loadImage('Images/wheel.png');
broccoli=loadImage('Images/Broccoli.png');
butterfly=loadImage('Images/butterfly.png');
chair=loadImage('Images/Chair.png');
chefshat=loadImage('Images/Chefs hat.png');
doll=loadImage('Images/doll.png');
duck=loadImage('Images/Duck.png');
fish=loadImage('Images/fish.png');
pistol=loadImage('Images/pistole.png');
steelbox=loadImage('Images/Wooden box.png');
nextimage=loadImage('Images/nextimage.jfif');
keys=loadImage('Images/Keys.png');
c1=loadImage('Images/c1.png');
c2=loadImage('Images/c2.png');
c3=loadImage('Images/c3.png');
c4=loadImage('Images/c4.png');
c5=loadImage('Images/c5.png');
c6=loadImage('Images/c6.png');
c7=loadImage('Images/c7.png');
diploma=loadImage('Images/diploma.png');
hilighter=loadImage('Images/hilighter.png');
gloves=loadImage('Images/gloves.png');
spectacles=loadImage('Images/spectacles.png');
xray=loadImage('Images/xray.png');
microscope=loadImage('Images/microscope.png');
humanskull=loadImage('Images/humanskull.png');
dentaltool=loadImage('Images/dentaltool.png');
wood=loadImage('Image/wood.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
      border1=createSprite(402,650,500,45);
      border1.addImage("border",border);
      border1.visible=false;

      border2=createSprite(930,650,500,45);
      border2.addImage("borderwheel",borderwheel);
      border2.visible=false;

      border3=createSprite(900,650,500,45);
      border3.addImage("fish",fish);
      border3.visible=false;

      border4=createSprite(650,650,500,45);
      border4.addImage("doll",doll);
      border4.visible=false;

      border5=createSprite(400,650,500,45);
      border5.addImage("butterfly",butterfly);
      border5.visible=false;

      border6=createSprite(150,650,500,45);
      border6.addImage("pistole",pistol);
      border6.visible=false;

      border7=createSprite(360,540,500,45);
      border7.addImage("Chefs hat",chefshat);
      border7.visible=false;

      border8=createSprite(120,540,500,45);
      border8.addImage("Chair",chair);
      border8.visible=false;

      border9=createSprite(845,530,500,45);
      border9.addImage("Duck",duck);
      border9.visible=false;

      border10=createSprite(600,540,500,45);
      border10.addImage("Broccoli",broccoli);
      border10.visible=false;

      border11=createSprite(250,655,500,45);
      border11.addImage("steelbox",steelbox);
      border11.visible=false;

      border12=createSprite(700,655,500,45);
      border12.addImage("keys",keys);
      border12.visible=false;

      border13=createSprite(180,430,500,45);
      border13.addImage("xray",xray);
      border13.visible=false;
     
      border14=createSprite(180,545,500,45);
      border14.addImage("spectacles",spectacles);
      border14.visible=false;

      border15=createSprite(540,430,500,45);
      border15.addImage("microscope",microscope);
      border15.visible=false;

      border16=createSprite(540,545,500,45);
      border16.addImage("humanskull",humanskull);
      border16.visible=false;
      
      border17=createSprite(900,430,500,45);
      border17.addImage("hilighter",hilighter);
      border17.visible=false;
      
      border18=createSprite(899,545,500,45);
      border18.addImage("gloves",gloves);
      border18.visible=false;
      
      border19=createSprite(179,660,500,45);
      border19.addImage("diploma",diploma);
      border19.visible=false;

      border20=createSprite(539,659,500,45);
      border20.addImage("dentaltool",dentaltool);
      border20.visible=false;

      border21=createSprite(539,659,500,45);
      border21.addImage("wood",wood);
      border21.visible=false;

      
      
      
      nextbutton=createSprite(1162,600,20,20);
      nextbutton.addImage("nextimage",nextimage)
      nextbutton.visible=false;

      //creating sprite and setting visability to false(GAME STATE 1)
    icecream=createSprite(725,464,40,90);
    icecream.visible=false;
    wheel=createSprite(652,120,65,90);
    wheel.visible=false;
    

    //creating sprite and setting visability to false(GAME STATE 2)
    fishclick= createSprite(870,192,40,140);
    fishclick.visible=false;
    dollclick=createSprite(255,286,55,120);
    dollclick.visible=false;
    butterflyclick=createSprite(655,38,100,90);
    butterflyclick.visible=false;
    pistolclick=createSprite(650,281,135,40);
    pistolclick.visible=false;
    
    //creating sprite and setting visability to false(GAME STATE 3)
    letterclick=createSprite(852,182,10,10);
    letterclick.visible=false;
    chefclick=createSprite(214,184,46,30);
    chefclick.visible=false;
    duckclick=createSprite(70,87,85,70);
    duckclick.visible=false;
    broclick=createSprite(15,227,25,20);
    broclick.visible=false;
    steelclick=createSprite(236,326,40,30);
    steelclick.visible=false;
    candelclick=createSprite(75,275,15,13);
    candelclick.visible=false;

    
   //creating sprite and setting visability to false(GAME STATE 4)
   dentalclick= createSprite(20,20,20,20)
   /*
   chefclick=createSprite(214,184,46,30);
   chefclick.visible=false;
   duckclick=createSprite(70,87,85,70);
   duckclick.visible=false;
   broclick=createSprite(15,227,25,20);
   broclick.visible=false;
   steelclick=createSprite(236,326,40,30);
   steelclick.visible=false;
   candelclick=createSprite(75,275,15,13);
   candelclick.visible=false;
   */
}



function draw() {
  background(225); 
  if(gameState===0){
 background(door);
 textSize(165);
 fill(0,0,0)
 textFont('chiller');
 text("MYSTERY GAME",displayWidth/2-390,displayHeight/2-10);
 textSize(20);
 textFont('inconsolata');
 text("press ENTER to start",displayWidth/2-50,displayHeight-20);
 textSize(35)
 fill('white')
 text("DEVELOPED BY: YUVIKA SACHDEVA", displayWidth/2-280,displayHeight-290)
  
  if (keyDown("enter")){
     gameState=1
    }
  }

  if(gameState===1){
    Level1();
     } 
  
  if(gameState===2){
    Level2();
  } 

  if(gameState===3){
    Level3();
  } 
  if(gameState===4){
    background(crimescene);

    //setting visibility to sprites
    border13.visible=true;
    border14.visible=true;
    border15.visible=true;
    border16.visible=true;
    border17.visible=true;
    border18.visible=true;
    border19.visible=true;
    border20.visible=true;
    border21.visible=true;
    

    text(""+mouseX+","+mouseY,mouseX,mouseY);

  } 

  if(gameState===5){
    background(221,160,221);
    textFont('chiller');
      textSize(70)
      fill(0)
      text("YOU HAVE COMPLETED THE MYSTERY GAME!!",displayWidth/2-530,displayHeight/2+120)
    if(frameCount%20==0){
      cong=createSprite(displayWidth/2-5,displayHeight/2-60);
      cong.addImage("c7",c7);
      cong.scale=2
    confetii1=createSprite(Math.round(random(10,displayWidth)),0,10,10);
    confetii1.velocityY=7;
    var number=Math.round(random(1,6))
    switch(number){
      case 1:confetii1.addImage("c1",c1)
      break;
      case 2:confetii1.addImage("c2",c2)
      confetii1.scale=0.5
      break;
      case 3:confetii1.addImage("c3",c3)
      break;
      case 4:confetii1.addImage("c4",c4)
      break;
      case 5:confetii1.addImage("c5",c5)
      break;
      case 6:confetii1.addImage("c6",c6)
      break;
      default : break
    }
    console.log(number);
    
    }
    
    
    
  } 
drawSprites();
}

function Level1(){
  background(livingroom);  
    
   
    //setting visability to the selected sprite
    border1.visible=true;
    border2.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

   

    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
     if(mousePressedOver(icecream)){
      //icecream.destroy();
      border1.addImage("border",tickmark);
      flag1=true;
      
    }

    if(mousePressedOver(wheel)){
      //wheel.destroy();
      border2.addImage("borderwheel",tickmark);
      flag2=true;
      
      }

      if(flag1===true&& flag2===true){
        textSize(80);
        
        fill(0);
        text("WELL DONE!!",displayWidth/2-200,displayHeight/2);
        nextbutton.visible=true;
        if(mousePressedOver(nextbutton)){
          flag3=true; 
          nextbutton.visible=false
          gameState=2;
        }
      }
     
      if(flag3===true){
        flag1=false;
          flag2=false;
         //text("NEXT",1162,654)
         background(0);
         border1.visible=false;
         border2.visible=false;
         
      }


}

function Level2(){
  background(hauntedroom);

    //setting visability to the selected sprite
    border3.visible=true;
    border4.visible=true;
    border5.visible=true;
    border6.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

   

    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
    if(mousePressedOver(fishclick)){
      border3.addImage("fish",tickmark)
      //text("YOU FOUND IT!!",displayWidth/2-50,displayHeight-20)
      flag4=true;
    }

    if(mousePressedOver(dollclick)){
      border4.addImage("doll",tickmark)
      //text("WELL DONE!",displayWidth/2-50,displayHeight-20)
      flag5=true;
    }

    if(mousePressedOver(butterflyclick)){
      border5.addImage("butterfly",tickmark)
      flag6=true;
    }

    if(mousePressedOver(pistolclick)){
      border6.addImage("pistole",tickmark)
      flag7=true;
    }

    if(flag4===true&& flag5===true && flag6===true && flag7===true){
      textSize(80);
      fill(221,160,221);
      text("AMAZING !!",displayWidth/2-200,displayHeight/2);
      nextbutton.visible=true;
      if(mousePressedOver(nextbutton)){
        flag3=true; 
        nextbutton.visible=false
        gameState=3;
      }
    }
}
function Level3(){
background(hollywoodset)
border3.visible=false;
border4.visible=false;
border5.visible=false;
border6.visible=false;


    
    //setting visability to the selected sprite
    border7.visible=true;
    border8.visible=true;
    border9.visible=true;
    border10.visible=true;
    border11.visible=true;
    border12.visible=true;


    text(""+mouseX+","+mouseY,mouseX,mouseY);

    
    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
    if(mousePressedOver(chefclick)){
      border7.addImage("Chefs hat",tickmark)
      //text("YOU FOUND IT!!",displayWidth/2-50,displayHeight-20)
      flag8=true
    }

    if(mousePressedOver(letterclick)){
      border8.addImage("Chair",tickmark)
      //text("WELL DONE!",displayWidth/2-50,displayHeight-20)
      flag9=true

    }

    if(mousePressedOver(duckclick)){
      border9.addImage("Duck",tickmark)
      flag10=true

    }

    if(mousePressedOver(broclick)){
      border10.addImage("Broccoli",tickmark)
      flag11=true

    }

    if(mousePressedOver(steelclick)){
      border11.addImage("steelbox",tickmark)
      flag12=true

    }

    if(mousePressedOver(candelclick)){
      border12.addImage("keys",tickmark)
      flag13=true

    }

    if(flag8===true&& flag9===true && flag10===true && flag11===true && flag12===true && flag13===true){
      textSize(80);
      fill(221,160,221);
      text("YOU MADE IT!!",displayWidth/2-200,displayHeight/2);
      nextbutton.visible=true;
      if(mousePressedOver(nextbutton)){
        flag3=true; 
        nextbutton.visible=false
        gameState=4;
      }
  }
}
