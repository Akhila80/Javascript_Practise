class bankaccountEncaps {
    #currentbalance
    constructor(currentbalance, accountholder) {
        this.#currentbalance = currentbalance
        this.accountholder = accountholder

    }
    deposit(depositamount) {
        this.#currentbalance = this.#currentbalance + depositamount

    }
    withdrawal(withdrawamount) {

        this.#currentbalance = this.#currentbalance - withdrawamount
    }
    showbalance() {
        console.log("current balance   " + this.#currentbalance)
    }
}
const depositobj = new bankaccountEncaps(5000, "Lilly")
depositobj.deposit(10000)
depositobj.showbalance()
depositobj.withdrawal(2000)
depositobj.showbalance()

console.log("salary task")
class SalaryManagement {
    #salary
    constructor(salary, employeeName) {
        this.#salary = salary
        this.employeeName = employeeName;
    }

    updateSalary(amount) {
        this.#salary = this.#salary + amount
    }

    reduceSalary(amount) {
        this.#salary = this.#salary - amount
    }

    showSalary() {
        console.log("Employee Name: " + this.employeeName)
        console.log("Current Salary: " + this.#salary)
    }
}

const salaryobj = new SalaryManagement(30000, "Lilly")

salaryobj.showSalary()

salaryobj.updateSalary(5000)
salaryobj.showSalary()

salaryobj.reduceSalary(2000)
salaryobj.showSalary()