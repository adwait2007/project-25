class Dustbin {
     constructor(x,y,width,height){
        var dustbin_options = {
            isStatic: true	
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.Body = Bodies.rectangle(this.x,this.y,this.width,this.height,dustbin_options);
       
	    World.add(world,this.Body);

     }
     display(){
        var pos = this.Body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect(pos.x,pos.y,this.width,this.height);
    
     }
}