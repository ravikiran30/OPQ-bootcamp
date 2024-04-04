// Trees:
// Family Data
// Folder structure
// Hierachial data,efficient searching, insertion
class TreeNode{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
        this.result=[]
    }
    
   
    inOrder(root){
       
        if(root!==null){
            this.inOrder(root.left)
            this.result.push(root.data)
            this.inOrder(root.right)   
        }
    }
    
    
    preorder(root){
        if(root!==null){
            this.result.push(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    postOrder(root){
        if(root!==null){
            this.postOrder(root.left)
            this.postOrder(root.right)
            this.result.push(root.data)
        }
    }
    printInorder(root){
        this.result=[]
        root.inOrder(root)
        let Inorder=""
        for(let i=0;i<this.result.length;i++){
            Inorder+=this.result[i]+" "
        }
        console.log(`Inorder:   ${Inorder}`)
    }
    printPreorder(root){
        this.result=[]
        root.preorder(root)
        let Preorder=""
        for(let i=0;i<this.result.length;i++){
            Preorder+=this.result[i]+" "
        }
        console.log(`Preorder:   ${Preorder}`)
    }
    printPostorder(root){
        this.result=[]
        root.postOrder(root)
        let Postorder=" "
        for(let i=0;i<this.result.length;i++){
            Postorder+=this.result[i]+" "
        }
        console.log(`PostOrder: ${Postorder}`)
    }
    printHeight(root){
        if(root==null){
            return -1
        }
        else{
            let leftSide=this.printHeight(root.left)
            let rightSide=this.printHeight(root.right)
            // if(leftSide>rightSide){
            //     return (leftSide+1)
            
            // }
            // else{
            //     return (rightSide+1)
            // }
            return (Math.max(leftSide,rightSide)+1)
        }
    }

    printSize(root){
        if(root==null){
            return 0
        }else{
            return this.printSize(root.left)+this.printSize(root.right)+1
        }

    }
    printSumofNode(root){
        if(root==null){
            return 0
        }else{
            return (root.data+this.printSumofNode(root.left)+this.printSumofNode(root.right))
        }
    }
    
    

    
}
    
let root=new TreeNode(6)
root.left=new TreeNode(5)
root.right=new TreeNode(7)
root.right.right=new TreeNode(8)
root.right.left=new TreeNode(9)


root.printInorder(root)
root.printPreorder(root)
root.printPostorder(root)
console.log("Height of the tree is: "+(root.printHeight(root)))
console.log("Size Of the tree is:  "+(root.printSize(root)))
console.log("Sum Of All the Nodes is  "+(root.printSumofNode(root)))
