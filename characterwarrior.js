import {charactercode} from "./charactercode.js"
export class characterwarrior extends charactercode{
    constructor(attack,sword){
        super(attack)
        this.sword=sword
    }
    Attackcharactor(){
console.log("Warrior perform an " + this.attack + " with "  + this.sword)
    }
}
