console.log("array program")
let fruit=["apple","orange","mango"]
console.log(fruit)
console.log("print only one item from the array")
console.log(fruit[1])
console.log(fruit[0])
console.log(fruit[2])
console.log("array length finding")
console.log(fruit.length)
console.log("add new element in the last of the array")
fruit.push("pineapple")
console.log(fruit)
fruit.push("watermelon")
console.log(fruit)
console.log("remove the element in the last of the array")
fruit.pop()
console.log(fruit)
console.log("add new elememt in the first")
fruit.unshift("blueberry")
console.log(fruit)
console.log("remove elememt in the first")
fruit.shift()
console.log(fruit)
console.log("array looping for loop")
let vehicles=["car","lorry","bus","jeep"]
console.log(vehicles)
console.log(vehicles.length)
const length=vehicles.length
console.log(length) 
for(let i=0;i<length;i++)
{
    console.log(vehicles[i])
}
console.log("array looping for off loop")
for(let vehicle of vehicles){
    console.log(vehicle)
}
vehicles.push("jcb")
console.log(vehicles)
vehicles.pop()
console.log(vehicles)
console.log("includes method-item is available or not")
console.log(vehicles.includes("jcb"))
console.log("finding the index of element in an array")
console.log(vehicles.indexOf("bus"))
vehicles.push("auto","pickup","scooter")
console.log(vehicles)
console.log("slice method in an array")
let slicearrayresult=vehicles.slice(3,5)
console.log(slicearrayresult)
console.log("splice method in an array-add new item and delete count is zero")
vehicles.splice(1,0,"cycle")
console.log(vehicles)
console.log("splice method in an array-no new item added and delete count is 2")
vehicles.splice(0,2,0)
console.log(vehicles)
console.log("cancat array-add two arrays")
let colours=["red","blue","orange","pink"]
let rainbow=["violet","indigo","blue","green","orange","red"]
let resultofconcat=colours.concat(rainbow)
console.log(resultofconcat)
console.log("sum of array elements")
let numbers=[1,2,3,4,5]
let sum=0
for(let i=0;i<numbers.length;i++)
    {
//sum=sum+numbers[i]
sum+=numbers[i]
}
console.log(sum)
console.log("reduce method in array")
let numbers1=[1,2,3,4,5,6,7,8,9,10]
const sumofnumbers1array=numbers1.reduce((total,value)=>total+value)
console.log(sumofnumbers1array)
console.log("set initial value as 4")
let numeric=[1,2,3,4,5,6]
const sumofnumeric=numeric.reduce((total,value)=>total+value,4)
console.log(sumofnumeric)
console.log("filter method using for loop")
let n=[1,2,3,4,5]
let even=[]
for(i=0;i<n.length;i++){
    if(n[i]%2==0)
        even.push(n[i])
}
console.log(even)
console.log("filter method in array")
let array1=[1,2,3,4,5,6,7,8,9,10]
const evenarray=array1.filter((value,index)=>value%2==0)
console.log("even number array    "   +evenarray)
console.log("mapping method in array")
let newarr=[1,2,3,4,5,6,7,8]
const maparray=newarr.map((value)=>value*2)
console.log("mapped array result " + maparray)
console.log("task-even number check and *5")
let task=[1,2,3,4,5,6,7,8,9,10]
const result1=task.filter((value)=>value%2==0)
console.log(result1)
const result2=result1.map((value)=>value*5)
console.log(result2)
console.log("both cases in single line")
let number23=[1,2,3,4,5,6,7,8]
const resul=(number23.filter((value)=>value%2==0).map((value)=>value*5))
console.log(resul)