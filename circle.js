class Circle{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        ellipse(this.x, this.y, 50, 50);
    }
}