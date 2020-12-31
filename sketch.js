const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground;
var dustbin,dustbinIMG;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(20,570,50);
	dustbin1=new Dustbin(600,590);
	ground=new Ground(width/2,600,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  paper.display();
  dustbin1.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		// your object is paper so that name you give.. try now
		Matter.Body.applyForce(paper.body,paper.body.position,{x:450,y:-450})


	}
}



