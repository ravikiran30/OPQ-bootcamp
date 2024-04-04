class Node{
    constructor(name,phnum){
        this.name=name
        this.phnum=phnum
        this.next=null
    }
}
let c1=new Node("Harish",9123457892)
let c2=new Node("Vikas",9834523456)
c1.next=c2
let c3=new Node("Vikwsdfgs",9834522443456)
c2.next=c3
console.log(c2)
console.log(c1)
console.log(c3)

console.log(c1.next.name)
