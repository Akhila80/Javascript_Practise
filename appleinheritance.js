import { fruitsInheritance } from "./fruitinheritanace.js"

class appleInheritance extends fruitsInheritance{

    constructor(colour,taste,variety){
        //this.colour=colour
        //this.taste=taste
        super(colour,taste);
        this.variety=variety
    }
    issweet(){
        console.log("Apple function")
        console.log(this.colour)
        console.log(this.taste)
        console.log(this.variety)
    }
}
const myapple=new appleInheritance("red","sweet","kashmiri")
myapple.issweet()
myapple.isripe()
//const myfruit=new fruitsInheritance("ble","ri","mm")
//myfruit.isripe()