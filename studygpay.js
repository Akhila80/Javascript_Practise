import {studypayment} from "./studypayment.js"
export class studygpay extends studypayment{
    constructor(item,amount,gpay){
        super(item,amount)
        this.gpay=gpay
    }
    getpayment(){
        console.log("payment for "  + this.item + " is " + this.amount +" usedby " + this.gpay)
    }
} 