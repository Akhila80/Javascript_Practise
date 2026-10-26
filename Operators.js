// +,-,*,/,%,**Arithematic operators
let a=23
let b=10
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
// =,+=,-=,*= Assignment operators
let x=10
x+=5
console.log(x)
x-=5
console.log(x)
x*=8
console.log(x)
//  ==,===,!=,!==,>,<,>=,<= comparison operators
let v=10
let p=52
console.log(v==p)
let y="52"
console.log(p==y)
console.log(p===y)
console.log(y!=p)
console.log(y!==p)
console.log(p>y)
console.log(p<y)
console.log(p>=y)
console.log(p<=y)

// &&,||,! conditional/logical operators
let age=22
let hasLicense=true
let canDrive=(age>=18) && hasLicense
console.log("can i drive? "+canDrive)
let age2=16
let hasLicense2=false
let canDrive2=(age2>=18) || hasLicense2
console.log("can i drive?" , canDrive2)
console.log(! hasLicense2)
