import {testinherisweets} from './testinherisweets.js'
class testinheriladdu extends testinherisweets{
    constructor(colour,type,price){
        //this.colour=colour
        //this.type=type
        super(colour,type)
        this.price=price
    }
    laddubox(){
        console.log("Laddu box function")
        console.log(this.colour)
        console.log(this.type)
        console.log(this.price)
    }}
    const Testinheriladduobj=new testinheriladdu("orange","Round",10)
    Testinheriladduobj.laddubox()
    Testinheriladduobj.sweetbox()