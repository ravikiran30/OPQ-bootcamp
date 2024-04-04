class Node{
  constructor(data){
    this.data=data
    this.head=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
  }
  addFirst(data){
    const newNode=new Node(data)
    newNode.next=this.head
    this.head=newNode
  }
  addLast(data){
    const newNode=new Node(data)
    if(!this.head){
      this.head=newNode
      return
    }
    let current=this.head
    while(current.next){
      current=current.next
    }
    current.next=newNode
  }
  size(){
    let count=0
    let current=this.head
    while(current){
      count++
      current=current.next
    }
    return count
  }
  addAt(index,data){
    if(index<0 ||index>this.size()){
      console.log("Invalid Index")
      return
    }
    const newNode=new Node(data)
    if(index===0){
      newNode.next=this.head
      this.head=newNode
      return
    }
    let current=this.head
    for(let i=0;i<index-1;i++){
      current=current.next
    }
    newNode.next=current.next
    current.next=newNode
  }
  removeTop(){
    if(!this.head){
      return
    }
    this.head=this.head.next
  }
  removeLast(){
    if(!this.head){
      return
    }
    let current=this.head
    while(current.next.next){
      current=current.next
    }
    current.next=null
  }
  removeAt(index){
    if(index<0 ||index>this.size()){
      console.log("Invalid Index")
      return
    }
    
    if(index===0){
      newNode.next=this.head.next
      
      return
    }
    let current=this.head
    for(let i=0;i<index-1;i++){
      current=current.next
    }
    if(current.next){
      current.next=current.next.next
    }

  }
  print(){
    let list=[]
    let current=this.head
    while(current){
      list.push(current.data)
      current=current.next
    }
    console.log(list)
  }
  
}

const linklist=new LinkedList()

linklist.addFirst(9)
linklist.addFirst(5)
linklist.addFirst(6)
linklist.addFirst(3)

console.log(linklist.print())
linklist.addLast(22)
console.log(linklist.print())
linklist.addAt(3,8)
console.log(linklist.print())
linklist.removeTop()
console.log(linklist.print())
linklist.removeLast()
console.log(linklist.print())
linklist.removeAt(2)
console.log(linklist.print())
linklist.addAt(0,77)
console.log(linklist.print())
