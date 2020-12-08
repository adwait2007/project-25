class BaseClass {
    constructor(x, y,width,height,r) {
      var options = {
        'density':1.0,
        'friction': 1.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png"); // this is de
      World.add(world, this.body);
    };

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };