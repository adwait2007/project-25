class Ground {
    constructor(x,y,width,height){
       var ground_options = {
           isStatic: true	
      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height
      this.Body = Bodies.rectangle(this.x,this.y,this.width,this.height,ground_options);
      World.add(world,this.Body);

    }
    display(){
        var pos = this.Body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    
    }
}