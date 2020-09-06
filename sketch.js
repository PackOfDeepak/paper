
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;


function preload()
{
	
}
  
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,450,40);
    ground = new Ground(400,460,800,20);
    dustbin = new Dustbin(600,450);

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-6});
    
    

  
  }
  if(keyCode === DOWN_ARROW){
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:6});
  }

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}



