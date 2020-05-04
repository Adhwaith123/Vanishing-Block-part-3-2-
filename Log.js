class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
fill("red");
    Matter.Body.setAngle(this.body,  angle);
  }
}