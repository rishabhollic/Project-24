const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var paper, ground, bin1,bin2,bin3;

function setup() {
 createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//to add the classes here:
	paper = new Paper();
	ground = new Ground(400,695,800,15);
	bin1 = new Dustbin(650,675,200,20);
	bin2 = new Dustbin(560,615,20,100);
	bin3 = new Dustbin(740,615,20,100);
	Engine.run(engine);
}

function draw()
{
   rectMode(CENTER);
   background("black");
   Engine.update(engine);

   ground.display();
   paper.display();
   bin1.display();
   bin2.display();
   bin3.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}

