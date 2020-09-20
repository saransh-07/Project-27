const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5;
function setup(){

var canvas = createCanvas(800,400);

engine = Engine.create();
world=engine.world;
roof = new Roof(400,100,200,20);
bob1 = new Bob(310,200,20);
bob2 = new Bob(350,200,20);
bob3 = new Bob(390,200,20);
bob4 = new Bob(430,200,20);
bob5 = new Bob(470,200,20);
rope1 = new Rope(bob1.body,roof.body,-90,0);
rope2 = new Rope(bob2.body,roof.body,-50,0);
rope3 = new Rope(bob3.body,roof.body,-10,0);
rope4 = new Rope(bob4.body,roof.body,30,0);
rope5 = new Rope(bob5.body,roof.body,70,0);
}
function draw(){
	background(255,0,0);
	Engine.update(engine);
	
	rope1.display();
	rope2.display();
	rope5.display();
	rope4.display();
	rope3.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	
	
	keyPressed();
}
function keyPressed(){
	if(keyWentDown(UP_ARROW)){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}
function drawLine(constraint) 
{ 
bobBodyPosition=constraint.bodyA.position 
roofBodyPosition=constraint.bodyB.position 
roofBodyOffset=constraint.pointB;
 roofBodyX=roofBodyPosition.x+roofBodyOffset.x
 roofBodyY=roofBodyPosition.y+roofBodyOffset.y
 line(bobBodyPosition.x,
 bobBodyPosition.y,
 roofBodyX,roofBodyY);
 }