
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bg
var dustbinObj,groundObject	
var ball1,ball2
var world;

function preload()
{
    bg = loadImage("room.jpg")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	 
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball1 = new Paper(300,100,100)
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);
 
keyPressed()
  groundObject.display();
  dustbinObj.display();
  ball1.display();
}

function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:120,y:-145});
		}
}