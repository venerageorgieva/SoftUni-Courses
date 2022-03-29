function addAndSub(arr){
let myArr = arr;
let sumOfOriginalArray = 0;
let modArrSum = 0;
//step 1 creating for loop till arr.length
for(let index=0;index < myArr.length;index++){
    sumOfOriginalArray += myArr[index];
    if(myArr[index] % 2 === 0){
    myArr[index] += index;
    } else {
        myArr[index] -= index;
    }   
    modArrSum+=myArr[index];
}
console.log(myArr);
console.log(sumOfOriginalArray);
console.log(modArrSum);
}

addAndSub([5, 15, 23, 56, 35]);