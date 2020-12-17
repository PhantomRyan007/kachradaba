
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 660, width, 10 );
 	
	
	
	kachra = new Kachra(200,650,40)
	kachradabba1 = new Kachradaba(600,638,150,20);
	kachradabba2 = new Kachradaba(523,605,20,90);
	kachradabba3 = new Kachradaba(673,605,20,90);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  kachra.display()
  ground.display()
  Kachradaba1.display
  drawSprites();

 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(kachra.body,kachra.body.position,{x:25,y:-25})
	}
}

