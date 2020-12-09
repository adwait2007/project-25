const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground;
var dustbin,dustbinIMG;

function preload(){
    dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin=createSprite(600,515,5,170);
	dustbin.addImage(dustbinIMG)
	dustbin.scale=0.5

	//Create the Bodies Here.
	paper=new Paper(150,570,50);
	dustbin1=new Dustbin(600,590,120,10);
	dustbin2=new Dustbin(655,515,10,160);
	dustbin3=new Dustbin(545,515,10,160);
	ground=new Ground(width/2,600,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		// your object is paper so that name you give.. try now
		Matter.Body.applyForce(paper.body,paper.body.position,{x:370,y:-370})


	}
}



