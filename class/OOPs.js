class Student{
    constructor(name,age,id){
        this.name=name
        this.age=age
        this.id=id
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }

}
let stud1=new Student("RAVI",20,51)
let stud2=new Student("KIRAN",25,60)
console.log(stud1.getAge())
