function displayresult(result){
    console.log(result)
}
function calculate(a,b,callback){
    let sum=a+b
    callback(sum)

}
calculate(10,12,displayresult)


function substraction(a,b,call){
    let sub=a-b
    call(sub)
}
substraction(15,5,displayresult)