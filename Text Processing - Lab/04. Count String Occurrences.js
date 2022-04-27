function occurrences(text,word){
   let tokens = text.split(' ');

   let counter = 0;

   for(let token of tokens){
       if(token == word){
           counter++;
       }
   }
   console.log(counter);
}

occurrences('This is a word and it also is a sentence',
'is'
);

function countOccurrences(text,word){
    let tokens = text.split(' ');
 
    let count = tokens.filter(x => x == word);
    console.log(count.length);


 }3

 countOccurrences('This is a word and it also is a sentence',
'is'
);