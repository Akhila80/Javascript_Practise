"use strict";
let age = 12;
let type = true;
let c = "ok";
let num = 20;
//num="twenty" type conversion is not possible
num = 21;
function add(a, b) {
    console.log(a + b);
}
add(12, 10);
function sub(c, d) {
    return c - d;
}
sub(15, 10);
console.log(sub(15, 10));
function displaydetails(price, brand) {
    console.log(brand + "," + price);
}
displaydetails(1000, "nike");
console.log("object program in ts");
let user = {
    name: "akh", age: 20, city: "usa"
};
console.log(user);
