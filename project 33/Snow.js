class Snow{
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = 20;
    this.height = 20;
    this.image = loadImage("snow5.webp");
    World.add(world, this.body);

}
display(){

    imageMode(CENTRE);
    image(this.image,x,y,this.width,this.height,options);
}


}
