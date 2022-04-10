function arrModify(input) {
  let arrayToModify = input.shift().split(" ").map(Number);

  for (let element of input) {
    command = element.split(" ");
    if (command[0] === "end") {
      break;
    } else if (command[0] === "swap") {
      //"swap {index1} {index2}"

      let temp = arrayToModify[Number(command[2])];
    arrayToModify[Number(command[2])] = arrayToModify[Number(command[1])];
    arrayToModify[Number(command[1])] = temp;
      

    } else if (command[0] === "multiply") {
      //"multiply {index1} {index2}"
      let first = arrayToModify[Number(command[1])];
      let second = arrayToModify[Number(command[2])];
      arrayToModify[command[1]] = first * second;

    } else if (command[0] === "decrease") {
     for (let i = 0; i < arrayToModify.length; i++) {
         arrayToModify[i] -= 1;
     }
    }
  }
  console.log(arrayToModify.join(', '));
}


arrModify([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
