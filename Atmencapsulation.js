class Atmencapsulation{
    #CurrentBalance
    constructor(CurrentBalance,Holdername){
        this.#CurrentBalance=CurrentBalance
        this.Holdername=Holdername
    }
Withdrawal(withdrawalamount){
this.#CurrentBalance=this.#CurrentBalance-withdrawalamount
}
deposit(depositamount){
this.#CurrentBalance=this.#CurrentBalance+depositamount
}
showbalance(){
console.log("current balance of Dev is " +this.#CurrentBalance)
}}
const withdrawalobj=new Atmencapsulation(10000,"DEV")
withdrawalobj.Withdrawal(500)
withdrawalobj.showbalance()
const Depositobj=new Atmencapsulation(20000,"DEV")
Depositobj.deposit(1000)
Depositobj.showbalance()
