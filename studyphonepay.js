import {studypayment} from "./studypayment.js"
import {studygpay} from "./studygpay.js"
export class studyphonepay extends studypayment{
    constructor(item,amount,phonepay){
        super(item,amount) // Call the parent class constructor
        this.phonepay=phonepay
    }
    getpayment(){
        console.log("payment of " + this.item + " is " + this.amount + " usedby " + this.phonepay)
    }
}
const Studyphonepayobj=new studyphonepay("watch", 100, "phonepay")
Studyphonepayobj.getpayment()
const Studygpayobj=new studygpay("Dress", 500, "gpay")
Studygpayobj.getpayment()
const Studypaymentobj=new studypayment("shoes",5000, "cashondelivery")
Studypaymentobj.getpayment()