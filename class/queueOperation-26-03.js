// Queue is a data structure on principle First In First out.

class Queue{
    constructor(){
        this.item =[]
    }
    enqueue(Element){                                   //adding element to queue
        this.item.push(Element)
    }
    dequeue(){                                          //removing element 
        if(this.isEmpty()){
            return  "underflow"
        }
        this.item.shift()
    }
    isEmpty(){
        return this.size()===0
    }
    size(){
        return this.item.length
    }
    front(){
        if(this.isEmpty()){
            return " No Elements in the queue"
        }
        return this.item[0]
    }
    print(){
        let queueItem=" "
        for(let i=0;i<this.size();i++){
            queueItem+=this.item[i]+" "

        }
        console.log("Queue:"+ queueItem)
    }
}

const myQueue=new Queue()

myQueue.enqueue(20)
myQueue.enqueue(56)
myQueue.enqueue(89)
myQueue.enqueue(52)
myQueue.dequeue()

console.log(myQueue.print())