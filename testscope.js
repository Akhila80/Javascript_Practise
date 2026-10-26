//var access check
if(true){
    var x="iam var"
    console.log(x) //var is a block scope---canbe called within a block
}
console.log(x) //var can access from outside block
//var in function
function testvar(){
    var y="iam var inside function"
    console.log(y)  //can access inside the function
}
testvar()
//console.log(y)  //cant access outside the function

//let and const check
if(true){
    let a="iam let inside block"
    console.log(a)  //can access inside the block
}
//console.log(a) // cant access outside the block
if(true){
    let b="iam const inside block"
    console.log(b)  //can access inside the block
}
//console.log(a) // cant access outside the block
var username= "ak" //global scope can run everywhere
function scopetest(){
    console.log(username)
    var userage=15
    console.log(userage)
    if(true){
        let usercity="Australia"
        var userroll="employee"
        const country="india"
        console.log(username) // prints output its a global scope
        console.log(userroll) //prints output within a block
        console.log(usercity) //prints output within a block
        console.log(country) //prints output within a block
        console.log(userage) // prints output within a block
    }
    console.log(userroll)
    //console.log(usercity) cant access outside the block
    //console.log(country)  cant access outside the block
}
scopetest()
console.log(username)
//console.log(userage) cant access outside function
//console.log(userroll) cant access outside function
//console.log(usercity) cant access outside function
// console.log(country) cant access outside function