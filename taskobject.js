const employees = 
  {
    employeeid: 1,
    name: "francis",
    department: "IT",
    salary: 50000,
  
  salary:function() {
        console.log("salary:50000");
        
    }
};
employees.salary();
for(let key in employees){
    if (employees[key]== "function"){
        console.log(key+ ":")
        employee[key]()

    }
    else{
        console.log(key + ":" + employees[key]);
    }
}



