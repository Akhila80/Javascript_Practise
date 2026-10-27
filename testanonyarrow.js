console.log("Anonymous function and arrow function")
const display =function(){
    console.log("Hello from Anonymous function")
}
display()
console.log("another example of anonymous function")
const addition=function(a,b){
    let sum=a+b
    return sum
}
console.log(addition(10,15))
console.log("Arrow Function")
const division=(a,b)=>{
    return a/b
}
console.log(division(200,20))