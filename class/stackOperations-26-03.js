// Stack--
// It is a data structure which operates on principle of last in first out[LIFO].
// "consider a stack of books kept on the table the last kept on the top 
// would be first book to be removed"

//It supprots above principle by providing:
// 1- Push:adding of elements to end/top
// 2-Pop: Removing of elements only from the top
    //other utility operations
        //  *isEmpty
        //  *size
        //  *peek:viewing the top /end element without removing it.
//Basic Operations

class Stack{
    constructor(){
        this.stack=[]
    }
    push(element){                                              //adding element on top
        this.stack.push(element)
    }
    pop(){                                                      //removing element on top
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack.pop()
    }
    peek(){                                                     //viewing the top element
        if (this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.size()-1]
    }
    isEmpty(){
        return this.size()===0
    }
    size(){
        return this.stack.length
    }
    printStack(){                                               //printing stack elements
        let myStack=[]
        for(let i in this.stack){
            myStack.push(this.stack[i])
        }
        console.log(myStack)
    }
}

const stack=new Stack()
stack.push(10)
stack.push(25)
stack.push(96)
console.log(stack.printStack())
console.log(stack.pop())
console.log(stack.printStack())
console.log(stack.peek())
console.log(stack.size())
