const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground,paperIMG,dustbinIMG;
var 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,570,50)
	dustbin1=new Dustbin(600,590,10,200);
	dustbin2=new Dustbin(700,550,100,10);
	dustbin3=new Dustbin(500,550,100,10);
	ground=new Ground(width/2,600,10,width);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

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
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})


	}
}



