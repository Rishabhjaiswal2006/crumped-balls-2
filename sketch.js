
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var MYengine,MYworld;
var bin;

function preload(){
bin=loadImage("dustbingreen.png");

}
function setup() {
	createCanvas(1000, 300);
	MYengine = Engine.create();
	MYworld =MYengine.world;

	ground=new Ground(500,290,1000,20);
	ball= new Ball(150,280);
	//block= new Block(704,225);
	log1=new Dustbin(618,225,25,110);
	log2=new Dustbin(705,267,150,25);
	log3=new Dustbin(790,225,25,110);
	
}


function draw() {
	Engine.update(MYengine);
  
  background("Yellow");

  ground.display();
  ball.display();
   log1.display();
   log2.display();
   log3.display();
  //block.display();
  imageMode(CENTER);
  image(bin,704,225,215,150);

  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120});
	}
}


