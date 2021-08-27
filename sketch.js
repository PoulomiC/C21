//definition
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;

var ground, top_wall, left_wall, right_wall;
var btn1;
var btn2;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  ball = Bodies.circle(100,10, 20, ball_options);
  World.add(world, ball);
  
  ground = new Ground(200,390,400,20);
  right_wall = new Ground(390,200,20,400);
  left_wall = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
}

function draw() 
{
  background(51);
  
  ground.show();
  right_wall.show();
  left_wall.show();
  top_wall.show();

  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
  
 
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

