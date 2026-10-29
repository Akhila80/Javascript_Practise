import {charactercode} from "./charactercode.js"
import {characterwarrior} from "./characterwarrior.js"
import {charactermage} from "./charactermage.js"

export class characterarcher extends charactercode {
    constructor(attack,arrow){
        super(attack)
        this.arrow=arrow
    }
    Attackcharactor(){
console.log("Archer perform an " + this.attack + " with "  + this.arrow)
    }
}
const Characterwarriorobj=new characterwarrior("attack" , "sword")
Characterwarriorobj.Attackcharactor()
const Charactermageobj=new charactermage("attack", "magic")
Charactermageobj.Attackcharactor()
const Characterarcherobj=new characterarcher("attack","arrow")
Characterarcherobj.Attackcharactor()