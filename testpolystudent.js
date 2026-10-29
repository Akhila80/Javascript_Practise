import {testpolyteacher} from './testpolyteacher.js'
class testpolystudent extends testpolyteacher{
    constructor(name){
        super(name)
        this.name=name
    }
    getrole(){
        console.log(this.name  + "  is a maths student")
    }
}
const Testpolystudentobj=new testpolystudent("Abcd")
Testpolystudentobj.getrole()
const Testpolyteacherobj=new testpolyteacher("XYZ")
Testpolyteacherobj.getrole()