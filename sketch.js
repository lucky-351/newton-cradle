
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

	//Create the Bodies Here.


	Engine.run(engine);
	ball1 = new ball;
	ball2 = new ball;
	ball3 = new ball;
	ball4 = new ball;
	ball5 = new ball;
	ball6 = new ball;
	slingshot1 = new slingshot;
	slingshot2 = new slingshot;
	slingshot3 = new slingshot;
	slingshot4 = new slingshot;
	slingshot5 = new slingshot;
	slingshot6 = new slingshot;

}


function draw() {
  rectMode(CENTER);
  background(0);
  slingshot.display();    
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  slingshot1.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();
  slingshot6.display();

  drawSprites();
 
}



