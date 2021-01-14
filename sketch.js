const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
var b={isStatic:true 

}
  ground=Bodies.rectangle(200,350,50,50,b);

 
  World.add(world,ground);
  var option={
    restitution:1.0
  }
ball=Bodies.circle(150,100,15,option);
World.add(world,ball);
console.log(ball)

}

function draw() {
  background(0);
    
Engine.update(engine)  
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,15);
}