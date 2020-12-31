var ball;
var ground;
var bricks;
var engine;
var world;

function setup (){
    createCanvas(1000,600);
    engine = Matter.Engine.create();
    world = engine.world;
    ground = new Ground(500,580,1000,40);
    box1= new Box(700,400,40,40);
    box2= new Box(750,400,40,40);
    box3= new Box(800,400,40,40);
    box5= new Box(700,350,40,40);
    box6= new Box(750,350,40,40);
    box7= new Box(800,350,40,40);
    box8= new Box(850,350,40,40);
    box9= new Box(700,300,40,40);
    box10= new Box(750,300,40,40);
    box11= new Box(800,300,40,40);
    box12= new Box(850,300,40,40);
    box13= new Box(700,250,40,40);
    box14= new Box(750,250,40,40);
    box15= new Box(800,250,40,40);
    box16= new Box(850,250,40,40);
    box17= new Box(700,200,40,40);
    box18= new Box(750,200,40,40);
    box19= new Box(800,200,40,40);
    box20= new Box(850,200,40,40);
    box21= new Box(700,150,40,40);
    box22= new Box(750,150,40,40);
    box23= new Box(800,150,40,40);
    box24= new Box(850,150,40,40);
    box25= new Box(850,100,40,40);
    box26= new Box(700,100,40,40);
    box27= new Box(750,100,40,40);
    box28= new Box(800,100,40,40);
    box29= new Box(850,50,40,40);
    box30= new Box(850,50,40,40);
    box31= new Box(700,50,40,40);
    box32= new Box(750,50,40,40);
    box33= new Box(800,50,40,40);
    ball= new Ball();
    rope= new Rope({x:500,y:100},ball.bodies)
    Matter.Engine.run(engine)


}

function draw(){
    background("green")

    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display() 
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()
    box32.display()
    box33.display()
    ball.display()
    rope.display()
    Matter.Engine.update(engine)
}

function mouseDragged() { 
    Matter.Body.setPosition(ball.bodies, { x: mouseX, y: mouseY });
 }
