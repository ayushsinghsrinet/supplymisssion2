var helicopterIMG, h, ps,packageIMG;
var pb,ground
var lo1;
var lo2;
var lo3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	packageIMG=loadImage("package.png")
	helicopterIMG=loadImage("helicopter.png")
}

function setup(){
var canvas=createCanvas(1000,600)
engine=Engine.create();
world=engine.world;

ps=createSprite(500,100,10,10)
ps.addImage("p",packageIMG)
ps.scale=0.2;

var opt={
	isStatic:true,
	restitution:0.9,
}
pb=Bodies.rectangle(500,200,20,20,opt)
World.add(world,pb)

h=createSprite(500,200,20,20)
h.addImage(helicopterIMG)
ground=Bodies.rectangle(500,580,1000,30,opt)
World.add(world,ground)

lo1=new box(500,555,200,20)
lo2=new box(400,515,20,100)
lo3=new box(600,515,20,100)
}

function draw(){
background(0)
keypressed();
	Engine.update(engine)
ps.x=pb.position.x;
ps.y=pb.position.y;
var p=pb.position




rectMode(CENTER)
	rect(p.x,p.y,20,20)	
rect(ground.position.x,ground.position.y,1000,30)
lo1.display();
lo2.display();
lo3.display();

drawSprites()
}
function keypressed(){
	if (keyWentDown("down")) {
Matter.Body.setStatic(pb,false)
	}
}
