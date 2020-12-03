class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            density:1.2,
            isStatic:false,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("paper.png")
        World.add(MYworld,this.body);
    }

    display(){
       
        push();
        translate(pos.x,pos.y);
       
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop();
    }
}