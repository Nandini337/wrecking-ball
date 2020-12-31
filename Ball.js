class Ball{
    constructor(){
        var prop={density:0.5,frictionAir: 0.005}
        this.bodies=Matter.Bodies.rectangle(450,400,40,40,prop)
        Matter.World.add(world,this.bodies)   
   
    }
  display(){
      rectMode(CENTER)
     fill("yellow")
     push()
     translate(this.bodies.position.x,this.bodies.position.y)
     ellipse(0,0,40,40)
    pop()
  }

} 
