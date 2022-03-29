function commandElement(arr1,arr2){

    for(index = 0;index < arr1.length;index++){
        for(i = 0;i < arr2.length;i++){
        if(arr1[index] === arr2[i]){
            console.log(arr1[index])
        }
        }
    }
}

commandElement(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)