
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var MYengine,MYworld;

function preload(){


}
function setup() {
	createCanvas(1000, 300);
	MYengine = Engine.create();
	MYworld =MYengine.world;

	ground=new Ground(500,290,1000,20);
	ball= new Ball(150,280,30);
	log1=new Dustbin(593,225,25,110);
	log2=new Dustbin(705,267,200,25);
	log3=new Dustbin(815,225,25,110);
	
}


function draw() {
	Engine.update(MYengine);
  
  background("Yellow");

  ground.display();
  ball.display();
  log1.display();
  log2.display();
  log3.display();

  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:140,y:-140});
	}
}


