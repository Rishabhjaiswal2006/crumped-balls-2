class Block{
    constructor(x,y){
        var rest={
               
                isStatic:true
            }
    
            this.body = Bodies.rectangle(x,y,100,100,rest);
            this.width = 100;
            this.height = 100;
            this.image=loadImage("dustbingreen.png");
            World.add(MYworld,this.body);
    }   
    
        display(){
            var pos = this.body.position ;
            imageMode(CENTER);
            
            image(this.image ,pos.x,pos.y,100,100);
        }
    }