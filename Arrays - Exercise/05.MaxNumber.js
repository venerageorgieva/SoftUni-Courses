function maxNumber(array){
    let topInteger = [];
    let arrayLength = array.length;
   
     for(i = 0; i < arrayLength ; i++){
         let currentElement = array[i];
         let isTopInt = true;
         for (let j = i + 1;j < arrayLength;j++){
          let nextElement = array[j];
          if(currentElement <= nextElement) {
              isTopInt = false;
              break;
          }
         }
         if(isTopInt) {
             topInteger.push(currentElement);
         }
     }
     console.log(topInteger.join(` `));
     
}

maxNumber([1, 4, 3, 2])