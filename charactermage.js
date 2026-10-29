import {charactercode} from "./charactercode.js"
import {characterwarrior} from "./characterwarrior.js"
export class charactermage extends charactercode{
    constructor(attack,magic){
        super(attack)
        this.magic=magic
    }
    Attackcharactor(){
console.log("Mage perform an " + this.attack + " with "  + this.magic)
    }
}
