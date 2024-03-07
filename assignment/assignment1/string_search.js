/*Implement your own search function for strings. dont use builtin function*/


let name="opqTech"
let sub="T"

function search(name,sub){
    
    for (let i=0;i<sub.length;i++){
        for (let j =i; j<name.length; j++){
            if(sub[i]==name[j]){
                
                console.log(j)
                
            }
            
        }
        
    }
    
    
}
console.log(search(name,sub))