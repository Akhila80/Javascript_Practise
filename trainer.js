import {employee} from "./employee.js"
class trainer extends employee{
    constructor(name){
        super(name);
        this.name=name
    }
getrole(){
    console.log(this.name  +"   is a software trainer")
}
}
const newtrainer=new trainer("tom")
newtrainer.getrole()
const newemployee=new employee("rani")
newemployee.getrole()