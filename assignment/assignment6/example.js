//Write a program for the given sentance find the duplicate words 

function findDuplicateWords(sentence) {
    let words = sentence.split(' ');
   
    const wordFreq = {};
    
    for (let word of words)
    { 
        if (wordFreq[word])
        {
            wordFreq[word]++;
        } 
        else
        {
            wordFreq[word] = 1;
        }
    }
    
    let duplicates = [];
    
    for (let word in wordFreq) 
    { 
        if (wordFreq[word] > 1) 
        {
            duplicates.push(word);
        }
    }
   
    return duplicates;
}

let sentence = "I am from Bengaluru . i have my instituion in Bengaluru";
let duplicateWords = findDuplicateWords(sentence);
console.log("Duplicate words:", duplicateWords);