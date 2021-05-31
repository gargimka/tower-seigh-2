const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
  polygon_img=loadImage("polygon.png");
  bg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(900,400);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



        Engine.run(engine); 
        
         
          stand1=new Stand(390,300,250,10);
          stand2=new Stand(700,200,200,10);
          ground=new Ground();
          // stand 1 level 1
          block10=new Box(300,275,30,40);
          block11=new Box(330,275,30,40);
          block12=new Box(360,275,30,40);
          block13=new Box(390,275,30,40);
          block14=new Box(420,275,30,40);
          block15=new Box(450,275,30,40);
          block16=new Box(480,275,30,40);
       // stand 1 level 2
          block1=new Box(330,235,30,40);
          block2=new Box(360,235,30,40);
          block3=new Box(390,235,30,40);
          block4=new Box(420,235,30,40);
          block5=new Box(450,235,30,40);
          // stand 1 level 3
          block6=new Box(360,195,30,40);
          block7=new Box(390,195,30,40);
          block8=new Box(420,195,30,40);
            // stand 1  level 4
          block9=new Box(390,155,30,40);



          //stand 2 level 1 
          block17=new Box(620,175,30,40);
          block18=new Box(650,175,30,40);
          block19=new Box(680,175,30,40);
          block20=new Box(710,175,30,40);
          block21=new Box(740,175,30,40);
          block22=new Box(770,175,30,40);

         // stand 2 level 2
         block23=new Box(650,135,30,40);
         block24=new Box(680,135,30,40);
         block25=new Box(710,135,30,40);
         block26=new Box(740,135,30,40);

         //stand 2 level 3
         block27=new Box(680,95,30,40);
         block28=new Box(710,95,30,40);



          ball=Bodies.circle(50,200,20);
          World.add(world,ball);
           
          sling=new SlingShot(this.ball,{x:100,y:200});
    }
    function draw() {
        rectMode(CENTER);
        background(bg);
        
        fill(0);
        text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

        fill(0);
        text("Press Space to play again",100,50);
      


        ground.display();
        stand1.display();
        stand2.display();

        //stand 1 level 2
        fill(51,255,153);
        block1.display();

        fill(255,51,51);
        block2.display();

        fill(51,255,153);
        block3.display();

        fill(255,51,51);
        block4.display();

        fill(51,255,153);
        block5.display();



        //stand 1 level 3
        fill("green");
        block6.display();

        fill("red");
        block7.display();

        fill("green");
        block8.display();



        // stand 1 level 4
        fill(255,204,204);
        block9.display();



        // stand 1 level 1
        fill("orange");
        block10.display();

        fill(204,153,255);
        block11.display();

        fill("orange");
        block12.display();

        fill(204,153,255);
        block13.display();

        fill("orange");
        block14.display();

        fill(204,153,255);
        block15.display();

        fill("orange");
        block16.display();


        //stand 2 level 1
        fill(102,178,255);
        block17.display();

        fill(102,255,178);
        block18.display();

        fill(102,178,255);
        block19.display();

        fill(102,255,178);
        block20.display();

        fill(102,178,255);
        block21.display();

        fill(102,255,178);
        block22.display();

        // stand 2 level 2
        fill(255,255,102);
        block23.display();

        fill(255,204,153);
        block24.display();

        fill(255,255,102);
        block25.display();

        fill(255,204,153);
        block26.display();

        // stand 2 level 3

        fill(204,0,102);
        block27.display();

        fill(255,255,0);
        block28.display();

       sling.display();





        imageMode(CENTER)
        image(polygon_img ,ball.position.x,ball.position.y,40,40);
        drawSprites();
       
      }

      function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
      }
      function mouseReleased(){
        sling.fly();
      }
      function keyPressed(){
       if (keyCode==32){
         sling.attach(this.ball);
       }
      }




