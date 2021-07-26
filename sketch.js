var cat,catA1,cattease,catend;
var mouse,mouseA1,mousetease,mouseend;
var garden,gardenA;

function preload() {
    //load the images here
    catA1= loadImage("cat1.png");
    cattease= loadAnimation("cat2.png","cat3.png");
    catend= loadImage("cat4.png");
    
    mouseA1= loadImage("mouse1.png");
    mousetease= loadAnimation("mouse2.png","mouse3.png");
    mouseend= loadImage("mouse4.png");
    
    gardenA= loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    garden= createSprite(400,400,10,10);
    garden.addImage("bg",gardenA);
    garden.scale=2.0;
    
    cat= createSprite(800,400,10,10);
    cat.addImage("cat1",catA1);
    cat.scale=0.1;

    mouse= createSprite(200,400,10,10);
    mouse.addImage("mouse1",mouseA1);
    mouse.scale=0.1;

    

}

function draw() {

    background(255);
    
    keyPressed();
    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        mouse.addImage("mouseover",mouseend);
        mouse.changeImage("mouseover");
        
        cat.addImage("catover",catend);
        cat.changeImage("catover");  
        cat.velocityX= 0;

    }

    drawSprites();
}


function keyPressed(){ 
    if(keyCode === LEFT_ARROW){ 
        
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", cattease); 
        cat.changeAnimation("catRunning"); 
       
        mouse.addAnimation("mouseTeasing", mousetease); 
        mouse.frameDelay = 25; 
        mouse.changeAnimation("mouseTeasing"); } 
    }
