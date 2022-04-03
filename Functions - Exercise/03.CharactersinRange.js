function charactersInRange(first,second){
 let firstSymbolasNumber = first.charCodeAt(0);
 let secondSymbolasNumber = second.charCodeAt(0);
 let min = Math.min(firstSymbolasNumber,secondSymbolasNumber);
 let max = Math.max(firstSymbolasNumber,secondSymbolasNumber)
let result = [];

for (let index = min + 1; index < max; index++) {
    
  let currentElement = String.fromCharCode(index);
  result.push(currentElement);
}

  console.log(result.join(' '));
}

charactersInRange('a','d');