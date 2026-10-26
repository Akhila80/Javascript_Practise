const person = {
    name:"ak",
    age:26,
    ispersonemployee:true
}
console.log(person)
let student ={
    name:"abcd",
    age:12,
    Greet:function(){console.log("good morning" + this.name)}
}
student.Greet()
for(let ket in student){
    if(student [key]=="function"){
        console.log(key())
    }
else
{
    console.log(key+":"+student[key])
}}
const employees = 
  {
    employeeid: 1,
    name: "francis",
    department: "IT",
    salary: 50000,
  
  employeedetails:function() {
        console.log("Employee ID: " + this.id);
        console.log("Employee Name: " + this.name);
        console.log("Department: " + this.department);
        console.log("Salary: " + this.salary);
    }
}