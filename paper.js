class Paper{
constructor(){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.circle(200,200,45,options)
    World.add(myworld,this.body)

}
display(){

    
    
    rectMode(CENTER)
    
   ellipse(200,200,45)
  }
}