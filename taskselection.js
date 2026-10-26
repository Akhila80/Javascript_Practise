import {taskpayment} from
class taskpayment extends taskselection {
    constructor(amount) {
        super();
    }

    pay() {
        console.log("abc payment is done using googlepay and amount is" +  this.amount)
    }
}
class taskpayment extends taskselection {
    constructor(amount) {
        super();
    }

    pay() {
        console.log("abc payment is done using phonepay and amount is" +  this.amount);
    }
}
const payment1 = new googlepay(1000);
const payment2 = new phonepay(500);