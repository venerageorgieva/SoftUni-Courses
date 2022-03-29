/* function magicSum(array, magicNum) {
  let arrayLength = array.length;
  let magicArray = [];
  for (let i = 0; i < arrayLength; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < arrayLength; j++) {
      let secondNum = array[j];
      let totalSum = Number(firstNum) + Number(secondNum);
      if (totalSum === magicNum) {
        magicArray.push(firstNum, secondNum);
        console.log(magicArray.join(" "));
        magicArray = [];
        break;
      }
    }
  }
} */




function magicSum (arr, num){
 
  for(let i = 0 ; i< arr.length -1; i++){

      let currentEl=arr[i]

      for(let j=i+1 ; j<arr.length; j++){

          let nextEl=arr[j]
          let sum=currentEl+nextEl

          if(sum === num){
              console.log(`${currentEl} ${nextEl}`);
          }
      }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);