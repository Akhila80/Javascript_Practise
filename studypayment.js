export class studypayment{
    constructor(item,amount){
        this.item=item
        this.amount=amount
       
    }
    getpayment(){
        console.log("payment for " + this.item + " is " + this.amount + " usedby cash on delivery")
}
}