class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'density':1.0
      }
      
      this.body1=Bodies.rectangle(600,470,200,15,options)

	this.body2=Bodies.rectangle(500,420,15,100,options)
     this.body3=Bodies.rectangle(700,420,15,100,options)
      this.width = width;
      this.height = height;
      this.x=x
      this.y=y

      this.image=loadImage("images/dustbingreen.png")
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
    
      imageMode(CENTER);
      fill("white")
      image(this.image,this.x, this.y, this.width, this.height);
    }
  }
