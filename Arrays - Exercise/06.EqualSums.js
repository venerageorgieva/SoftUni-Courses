function equalSums(arr){
    let suml =0;
    let sumr =0;
    let currentIndex = "no";
    let arrLength = arr.length;

    for(let i = 0; i < arrLength; i++){
        sumr = 0;
        if ( i == 0){
            suml = 0
        }else{
            suml +=Number(arr[i-1]);
        }
        for ( let j = i+1; j< arrLength; j++){
            sumr+=Number(arr[j]);
        }
        if (suml == sumr){
            currentIndex = i;
        }
    }
    console.log(currentIndex);

}

equalSums([1, 2, 3, 3])