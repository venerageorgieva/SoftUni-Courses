function reveal(words,text) {
   words = words.split(', ');
    let textArray = text.split(' ');
    let result = [];

    for(let token of textArray){
        let replaced = false;
        for (let word of words) {
            if(token == '*'.repeat(word.length)){
                result.push(word);
                replaced = true;
            }
        }
            if(replaced == false){
        result.push(token);
    }
    }

    console.log(result.join(' '));
}

reveal(
  "great",
  "softuni is ***** place for learning new programming languages"
);
