class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.variability = 255;


  }
  display(){
    if(this.body.speed<3){
super.display()
    }
    else{
      World.remove(world,this.body)
      push()
      this.variability = this.variability-5
      tint(255,this.variability)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
      
        
    }
  }

};