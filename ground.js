class Ground {
    constructor(x,y,w,h){
        var option = {isStatic: true}
        this.body = Bodies.rectangle(x,y,w,h,option)
        World.add(world, this.body)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    display() {
        rect(this.x, this.y, this.w, this.h)
    }
}
