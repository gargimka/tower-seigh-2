class Box {
    constructor(x,y,width,height) {
      this.Visibility=255;
      var options = {
          isStatic:false 
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    

      if(this.body.speed < 3){
        var pos =this.body.position;
      rectMode(CENTER);
     // fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity-10;
         tint(255,this.Visiblity);
         pop();
       }
       
     
    }
  };