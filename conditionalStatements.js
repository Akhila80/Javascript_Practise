//if(condition){
//code tobe excute
//}
let age = 15
if (age > 10) {
    console.log("you are eligible")

}
else {
    console.log("you are not eligible")
}
/*if(conditon1){ if else if
}
else if(condition2){
}
else {
}*/
if (age > 12) {
    console.log("you are not eligible , you are a kid")
}
else if (age > 50) {
    console.log("you are not eligible, you are senior")
}
else {
    console.log("you are eligible")
}
/*switch(exprn)
{
case1:
case2::
case n:
default:
}*/
let day = 8
switch (day) {
    case 1:
        console.log("today is monday")
        break
    case 2:
        console.log("today is tuesday")
        break
    case 3:
        console.log("today is wednesday")
        break
    case 4:
        console.log("today is Thursday")
        break
    case 5:
        console.log("today is friday")
        break
    case 6:
        console.log("today is saturday")
        break
    case 7:
        console.log("today is sunday")
        break
    default:
        console.log("invalid day")
}
let letter = "g"
switch (letter) {
    case "a":
        console.log("letter is vowel")
        break
    case "e":
        console.log("letter is vowel")
        break
    case "i":
        console.log("letter is vowel")
        break
    case "o":
        console.log("letter is vowel")
        break
    case "u":
        console.log("letter is vowel")
        break
    default:
        console.log("letter is not vowel")
}
let letter2 ="A"
switch(letter2){
    case "A":
        case "A":
        case "E" :
        case "I":
        case "O" :
        case "U":
        console.log("Letter is vowel")
        break;
        console.log("Letter is not vowel")
        
}
let mark=50
const result= (mark>=40)? "pass" :"failed"
    console.log(result)
console.log("ternary operator example")
let dob=1995
let eligible=(dob>=1997)? "eligible person" : "non eligible person"
console.log(eligible)