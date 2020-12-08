class Ground {
    constructor(x,y,height,width){
       var ground_options = {
           isStatic: true	
      }
      this.x=x;
      this.y=y;
      this.height=height;
      this.width=width;
      this.Body = Bodies.rectangle(this.x,this.y,this.width,this.height,ground_options);
      World.add(world,this.Body);

    }
    display(){
        var pos = this.Body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    
    }
}