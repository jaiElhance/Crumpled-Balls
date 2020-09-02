
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottomDustbin;
var rightDustbin;
var leftDustbin;
var paper1;
var ground;

function preload()
{

}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	bottomDustbin = createSprite(600,680,200,20);
	rightDustbin = createSprite(690,630,20,100);
	leftDustbin = createSprite(510,630,20,100);
	bottomBoxshapeColor = "white"
	rightBox = shapeColor = "white"
	leftBox = shapeColor = "white"

	ground = new Ground(400,695,800,10);
	
	paper1 = new paper(100,350)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bottomDustbin.display();
  rightDustbin.display();
  leftDustbin.display();
  paper1.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}