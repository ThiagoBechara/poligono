class SlingShot{

    constructor(bodyA, pointB){

        var options ={
        
        bodyA: bodyA,
        pointB: pointB,
        stiffness:0.07,
        length:10,
        
        }
        this.pointB = pointB
        //corpo com o mesmo nome da classe
        this.slingShot = Constraint.create(options)
        World.add(world, this.slingShot)
        
        }
        fly(){

            this.slingShot.bodyA = null
            
            }
            
            display(){
            
            if(this.slingShot.bodyA){
        
            //nome do corpo em portugues

            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            
            push()
            strokeWeight(10);
            stroke("#431F0C");
            line(pointA.x, pointA.y,pointB.x,pointB.y);
           
            pop()
            }
        }
    }
