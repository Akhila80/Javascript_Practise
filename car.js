class car{
  //constructor creation
  constructor(colour,brand){
console.log("constructor calling")
this.colour=colour
this.brand=brand
  }
  drive(){
    console.log("drive a car")
  }
  start(){
    console.log("start the car")
  }  
  display(){
    console.log(this.brand)
    console.log(this.colour)
  }
}
const carobj=new car("Blue","Volvo")
carobj.drive()
carobj.start()
// constructor
carobj.display()
const carobj1=new car("red","tesla")
carobj1.display()
console.log("print student details using constructor")
class student{
  //constructor creation
  constructor(name,age,division,rollnum){
this.name=name
this.age=age
this.division=division
this.rollnum=rollnum
  }
  display(){
    console.log(this.name)
    console.log(this.age)
    console.log(this.division)
    console.log(this.rollnum)
}}
let details=new student("roy",12,4,30)
details.display()