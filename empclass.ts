class emplclass{
    name:string
    id:number
    salary:number
    constructor(name:string,id:number,salary:number){
        this.name=name
        this.id=id
        this.salary=salary

    }
    getdetails(){

        return this.name
    }}
    const empdetails=new emplclass("abc",25,50000)
    console.log(empdetails.getdetails())