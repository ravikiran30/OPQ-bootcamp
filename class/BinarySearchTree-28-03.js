class GivenTree{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
        this.result=[]
      
    }
    result=[]
    inOrder(root){
       
        if(root!==null){
            this.inOrder(root.left)
            this.result.push(root.data)
            this.inOrder(root.right)   
        }
    }
    printInorder(root){
        this.result=[]
        root.inOrder(root)
        let Inorder=[]
        for(let i=0;i<this.result.length;i++){
            Inorder.push(this.result[i])
        }
        console.log(`Inorder:   ${Inorder}`)
        
    }
    isBinaryTree(root){
        let count=1
        for(let i=0;i<this.result.length-1;i++){
            if(this.result[i]<this.result[i+1]){
                count+=1
            }
        }
        if(count==this.result.length){
            console.log("Its Binary search Tree")

        }else{console.log("Its not binary Search tree")}

    }


}
let root=new GivenTree(6)
root.left=new GivenTree(5)
root.right=new GivenTree(7)
root.right.right=new GivenTree(8)
root.right.left=new GivenTree(9)

root.printInorder(root)
root.isBinaryTree(root)