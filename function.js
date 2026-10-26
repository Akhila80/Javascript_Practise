function addition(){
    let a=5
    let b=3
    let c=a+b
    console.log(c)
}
addition()
console.log("**************************")
function printDetails(){
    let name="ghj"
    let age=12
    let division=6
    let housename="mist"
    let housenumber=5
console.log(name)
console.log(age)
console.log(division)
console.log(housename)
console.log(housenumber)
}
printDetails()
console.log("function with parameters")
function substraction(a,b){
let result=a-b
console.log(result)
}
substraction(30,20)
substraction(10,15)
console.log("function with return type")
function multiplication(d,e){
    let answer=d*e
    return answer

}
console.log(multiplication(3,2))
let ans=multiplication(5,5)
console.log(ans)
console.log("annonymous function")
const annon =function(){
    console.log("hello from annonymous function")
}
annon()

// ()=>{} syntax of arrow function
console.log("annonumous function example")
const display=function(a,b){
    return a+b
}
console.log(display(3,3))
let st=(display(3,3))
console.log(st)
console.log("arraow function example")
const arrow=(x,y)=>{return x+y}
console.log(arrow(10,10))