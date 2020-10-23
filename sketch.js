
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(50,50,20);
	ground1=new Ground(400,650,800,10);
	Dustbinlog1=new Dustbin(550,640,200,20);
	Dustbinlog2=new Dustbin(650,600,20,100);
	Dustbinlog3=new Dustbin(450,600,20,100);
	console.log(paper1)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
paper1.display();
Dustbinlog1.display();
Dustbinlog2.display();
Dustbinlog3.display();
ground1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:50})
	}
}