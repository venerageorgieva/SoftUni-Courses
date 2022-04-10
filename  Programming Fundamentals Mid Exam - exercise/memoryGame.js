function memoryGame(array) {
  let numbersToMatch = array.shift().split(" ");
  let hasLost = false;
  let countOfMoves = 0;
  let hasWon = false;
  

  for (let i = 0; i < array.length; i++) { 

      let currentNumbers = array[i];
      if (currentNumbers === 'end'){
          if(numbersToMatch.length > 0){
              hasLost = true;
          }
          break;
      } else {
        currentNumbers =  array[i].split(" ").map(Number);
      }
  
    let firstIndex = currentNumbers[0];
    let secondIndex = currentNumbers[1];
    let firstNum = numbersToMatch[firstIndex];
    let secondNum = numbersToMatch[secondIndex];
    countOfMoves++;

    if (firstNum == secondNum){
        console.log(`Congrats! You have found matching elements - ${firstNum}!`);
        let bigIndex = Math.max(firstIndex,secondIndex);
        let lowIndex = Math.min(firstIndex,secondIndex);
        numbersToMatch.splice(lowIndex,1);
        numbersToMatch.splice(bigIndex - 1,1);

        if (numbersToMatch.length == 0 ){
            hasWon = true;
            break;
        }   
    }else if(firstIndex < 0 || secondIndex < 0){
        console.log("Invalid input! Adding additional elements to the board");
        let toAdd =`-${countOfMoves}a`;
        numbersToMatch.splice(4,0,toAdd);
        numbersToMatch.splice(5,0,toAdd);
        
    } else if(firstNum != secondNum) {
        console.log("Try again!");
    } 
    
    }

    if(hasLost){
        console.log("Sorry you lose :(");
        console.log(numbersToMatch.join(' '));
    }else if (hasWon){
        console.log(`You have won in ${countOfMoves} turns!`);
    }
  }


// memoryGame([
//     'a 2 4 a 2 4',
//     '0 3',
//     '0 2',
//     '0 1',
//     '0 1',
//     'end']);

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )

// memoryGame( [
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"
//  ]);
