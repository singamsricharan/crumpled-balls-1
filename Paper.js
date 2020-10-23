class Paper{
    constructor(x,y,radius){
      //properties
      var Options = {
          isStatic:false,
          restitution: 1.0,
          friction : 0.9,
          density : 1.2,
      }
      this.body =Matter.Bodies.circle(x, y, radius,Options)
      this.radius=radius
      World.add(world, this.body);
    }
//functions
display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 rectMode(CENTER);
 fill(255);
 circle(0,0,this.radius);
 pop();
}
}
