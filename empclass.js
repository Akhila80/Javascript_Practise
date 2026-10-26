"use strict";
class emplclass {
    name;
    id;
    salary;
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    getdetails() {
        return this.name;
    }
}
const empdetails = new emplclass("abc", 25, 50000);
console.log(empdetails.getdetails());
