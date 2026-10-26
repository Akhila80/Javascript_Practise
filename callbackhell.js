/*function displaydata(cb1) {
    console.log("first function executed")
    cb1()
}
function callbackfunction1(cbb2) {
    console.log("callbackk function1 executed")
    cbb2()
}
function endfunction() {
    console.log("execution stopped")
}
displaydata(function () {
    callbackfunction1(function () {
endfunction()
    })

})*/
const dispalydata=()=>{
    return new Promise(()=>{
        console.log("first function executed")
        resolve()
    })
}
const callbackfunction1=()=>{
    return new Promise((resolve,reject)=>{
        console.log("callbackfunction1 executed")
        let pass=false 
        if(pass){
            resolve("completed")
        }
        else{
            reject("not completed")
        }
    })
}
const endfunction=()=>{
    return new Promise((resolve,reject)=>{
        console.log("function execution stopped")
    })

}
dispalydata().then(()=>callbackfunction1())
             .then(()=>endfunction())
             .then(()=>{console.log("All functions executed succssfully")})
             .catch((error)=>{console.error("The error message is " +error)})
             
const task=()=>{
    return new Promise((resolve)=>{
        resolve("hello asychronite function")
    })
             
}
const task2=async()=>{
    console.log("function start")
    
    const result= await task()
    console.log(result)
    console.log("function stop")

}
task2()