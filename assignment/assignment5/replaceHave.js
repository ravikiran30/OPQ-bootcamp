let dic={
    "string1":"I have a pencil",
    "string2":"I have a pen",
    "string3":"I have a book",
    "string4":"I have a eraser"
}
let dic2={}
for(i in dic){
    dic2[i]=dic[i].replace(/have/g," ")
    
}

console.log(dic)
console.log(dic2)


/*output==
{string1: 'I have a pencil', string2: 'I have a pen', string3: 'I have a book', string4: 'I have a eraser'}
{string1: 'I   a pencil', string2: 'I   a pen', string3: 'I   a book', string4: 'I   a eraser'}*/