function solve(list , nRotations) {
 for(let i = 0;i < nRotations;i++){
 let firstElement = list[0];
 
 for(let j = 0; j < list.length - 1;j++){
 list[j] = list[j + 1];
 }
 let lastIndex = list.length - 1;
 list[lastIndex] = firstElement;
 }
 console.log(list.join(` `))
 } 
 
/*  function arrayRotation(arr, rotationsCount) {
  let arrayOfElements = arr;
  let rotations = rotationsCount;

  for (let index = 0; index < rotations; index++) {
    let numberToMove = arrayOfElements.shift();
    arrayOfElements.push(numberToMove);
  }
  console.log(arrayOfElements.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2); */