function censoredWords(text , word) {
    while(text.includes(word)){
         text = (text.replace(word,'*'.repeat(word.length)));
    }
     console.log(text);
}

censoredWords("A small sentence with some words", "small");

function censored(text , word) {
  let tokens = text.split(word);

  console.log(tokens.join('*'.repeat(word.length)));

}

censored("A small sentence with some words", "small");