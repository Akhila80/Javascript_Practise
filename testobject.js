const person= {
name:"ABC",
age:14,
address:"mist valley",
roomnumber:13
}
console.log(person)
console.log("dot notation in object")
console.log(person.age)
console.log("bracket notation")
console.log(person["address"])
console.log("adding new property")
person.mobilenumber=12345
console.log(person)
console.log("update the name")
person.name="abc cargo"
console.log(person)
console.log("delete the property")
delete person.age
console.log(person)
console.log("this and function in object")
const student= {
    name:"ROY",
    age:12,
    middilename:"rr",
    lastname:"francis",
fullname:function(){
    console.log(this.name+this.middilename+this.lastname)
}

}
student.fullname()
console.log(student)
console.log("simple program with function and this keyword")
const home={
    housename:"mist",
    housenumber:23,
    street:"mistvalley",
    pincode:4563,
    display:function(){
        console.log(this.street)
        console.log(this.housename)
}
}
home.display()
console.log("for in loop -object-display only key values")
const teachers={
    department:"english",
    floor:2,
    names:"alice"
}
for(let key in teachers){
    console.log(key)                         // only keys
    console.log(key,teachers[key])             // keys and values
    console.log(key+   ":"  +teachers[key])   // concat method
}
console.log("looping with function")
const kids={
    name:"abc",
    rollno:2,
    department:"lkg",
    greet:function(){
        console.log("goodmorning  " + this.name)

    }
}
kids.greet()
console.log("need to print employee salary details calculation")
let employeeme={
    name:"Mery",
    employeeid:"em12345",
    Basicpay:5000,
    Bounus:2000,
    Pf:150,
    salarydetails:function(){
        console.log("total amount is " + (this.Basicpay+this.Bounus+this.Pf))
    }}
    employeeme.salarydetails()
