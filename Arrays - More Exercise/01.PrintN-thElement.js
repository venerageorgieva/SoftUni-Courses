function nThElement(array){
    let arrayL = array.length;
    let elementsN = [];
    let counter = 0;

  for(let i = 0;i < arrayL - 1;i++){
      let nElement = array[arrayL - 1];
      if (i == 0) {
          elementsN.push(array[i])
      }
          if (counter == nElement ) {
              elementsN.push(array[i]);
              counter = 0;
      }  
      counter++;
  }
  
  console.log(elementsN.join(" "));

}

nThElement(
     ['1', '2', '3', '4', '5', '6']
 );

// function nthElement(arr) {
//     let last = arr[arr.length - 1];
//     let modifiedArr = [];
  
//     for (let i = 0; i < arr.length; i++) {
//         if(i%last==0 && i!=arr.length-1) {
//             modifiedArr.push(arr[i]);
//         }
//   }
//   console.log(modifiedArr.join(' '));
//   }

