
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(160,500,20);
	mango1 = new mango(1300,300,30);
	mango2 = new mango(1310,250,30);
	mango3 = new mango(1210,200,30);
	mango4 = new mango(1190,300,30);
	mango5 = new mango(1230,300,30);
	mango6 = new mango(1100,300,30);
  mango7 = new mango(1150,280,30);
  tree = new Tree(1150,680);
  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,600);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function detectCollision(stone,mango){
	stoneBodyPosition = stone.body.position;
	mangoBodyPosition = mango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= mango.r + stone.r){
	  Matter.Body.setStatic(mango.body, false);
	}
  
  }
