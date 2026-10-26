if (true) {
    var x = "iam var"
    console.log(x)
}
console.log(x)
function testvar() {
    var y = "iam var inside the function"
    console.log(y)
}
testvar()
// console.log(y) function ouside no access
if (true) {
    let a = "iam a var inside"
    console.log(a)
    const b = "iam a const var"
    console.log(b)
}
//console.log(a)
//console.log(b)
console.log("task for understanding the topic")
var username = "akhila"
function scopetest() {
    console.log(username)  //print username
    //console.log(usercity) nor print
    //console.log(userroll)
    //console.log(userage)
    var userage = 12
    if (true) {
        let usercity = "uk"
        var userroll = "admin"
        const contry = "india"
        console.log(username)
        console.log(usercity)
        console.log(userroll)
        console.log(userage)
    }
}
scopetest()
console.log(username)//print
//console.log(usercity)//not print
//console.log(userroll)//not print
//console.log(userage)//not print