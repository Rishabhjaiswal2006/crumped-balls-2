class Ball{
    constructor(x,y){
        var options={
            restitution:0.3,
            density:1.2,
            isStatic:false,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("paper.png")
        World.add(MYworld,this.body);
    }

    display(){
       var pos=this.body.position
       var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}