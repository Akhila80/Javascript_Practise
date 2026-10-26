function hello(){
    console.log("Welcome to the show")
}
hello()
console.log("simple program of function")
function addition(){
let a=12
let b=10
let sum=a+b
console.log(sum)
}
addition()   
console.log("print details of a student")
function studentDetails(){
    let name="Anu"
    let rollno=1
    let employid="an2356"
    let place="Australia"
    console.log(name)
    console.log(rollno)
    console.log(employid)
    console.log(place)
}
studentDetails()
console.log("function with parameters")
function multiplication(a,b){
    let result=a*b
    console.log(result)
}
multiplication(5,5)
multiplication(10,12)
console.log("function in return type")
function multiplication(a,b,c){
    let result=a*b*c
    return result
}
console.log(multiplication(20,30,10))
console.log("another example")
function addition(a,b){
    let add=a+b
    return add
}
console.log(addition(20,20))
console.log("another method of return type")
function add(a,b,c){
    let result=a+b+c
    return result
}
let answer=add(10,20,30)
console.log(answer)