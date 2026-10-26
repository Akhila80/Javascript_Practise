let age:number=12
let type:boolean=true
let c:string="ok"
let num:number=20
//num="twenty" type conversion is not possible
num=21
function add(a:number,b:number){        
    console.log(a+b)
}
add(12,10)
function sub(c:number,d:number):number{
    return c-d
}
sub(15,10)
console.log(sub(15,10))
function displaydetails(price:number,brand:string):void{
    console.log(brand + ","  + price)
}
displaydetails(1000,"nike")
console.log("object program in ts")
let user:{name:string,age:number,city:string}={
    name:"akh",age:20,city:"usa"}
    console.log(user)