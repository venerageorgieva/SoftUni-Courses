function maxEqualElements(arr){
let arrLength = arr.length;
let equalNumber = [];
let isFoundEquals = false;

for(let i = 0;i < arrLength;i++){
    let firstNum = arr[i];
    for(let j = i+1; j < arrLength;j++){
        let secondNum = arr[j];
        for(let k = j+1; k < arrLength;k++){
            let thirdNum = arr[j];
        if(firstNum == secondNum || firstNum == secondNum == thirdNum){
            equalNumber.push(firstNum,secondNum),thirdNum;
            isFoundEquals = true;
            break;
        }
    }
       if (isFoundEquals){
           break;
       }
    } 
    if(isFoundEquals){
            break;
        }
}
console.log(equalNumber.join(" "))

}
maxEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])