class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:20,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      this.image = loadImage("paper.png");
      
      imageMode(CENTER);
      image(this.image, 0,0,this.width+150,this.width, this.height+150,this.height)
      
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  // Mam Image is not working idk why