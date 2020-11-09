class box {
constructor(x,y,width,height){
    var ok={
        restitution:0,
        isStatic:true,
    }
this.body=Bodies.rectangle(x,y,width,height,ok)
this.width=width
this.height=height
World.add(world,this.body)





}
display(){
var pos=this.body.position
rectMode(CENTER)
fill("red")
rect(pos.x,pos.y,this.width,this.height)


}


}