
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3
var groundBody,paper
var dustbin
function preload(){

}
function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

paper=new Paper(50,250,45)
groundBody=new Ground(width/2,490,width,20)
dustbin=new Dustbin(600,430,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  groundBody.display()
  paper.display()
  dustbin.display()

  drawSprites();
 
  
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-25})
}

}


