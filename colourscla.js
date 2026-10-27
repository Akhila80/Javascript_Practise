class colourscla{
    drive(){
        console.log("Iam driving a red swift car")
    }
    petrol(){
        console.log("Added 1000 rupees petrol")
    }
}
const coloursclaobj=new colourscla()
coloursclaobj.drive()
coloursclaobj.petrol()
console.log("constructor function")
class dress{
    constructor(){
        console.log("iam a constructor")
    }
    typeofdress(){
        console.log("many types are available")
    }
}
const dressobj=new dress()
dressobj.typeofdress()
console.log("parameterized constructor")
class Student{
    constructor(name,age,mark){
        this.name=name
        this.age=age
        this.mark=mark
    }}
    const studentobj=new Student("Akhila",18,35)
    console.log(studentobj.name)
    console.log(studentobj.age)
    console.log(studentobj.mark)
class Fruits{
    constructor(type,colour,price){
        this.type=type
        this.colour=colour
        this.price=price
    }
    display(){
        console.log(this.type)
        console.log(this.colour)
        console.log(this.price)
    }
}
const fruitsobj=new Fruits("mango","yellow",100)
fruitsobj.display()