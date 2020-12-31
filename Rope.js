class Rope{
  constructor(point,body){
      var prop={bodyA:body,pointB:point,length:220,stiffness:1.2}
      this.bodies=Matter.Constraint.create(prop)
      Matter.World.add(world,this.bodies)
  }

  display(){
      fill("black")
      line(this.bodies.bodyA.position.x,this.bodies.bodyA.position.y,this.bodies.pointB.x,this.bodies.pointB.y)
  }
}