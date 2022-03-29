function merge(arr1, arr2) {
  let arrayThree = [];

  for (let index = 0; index < arr1.length; index++) {
    if (index % 2 === 0) {
      arrayThree.push(Number(arr1[index]) + Number(arr2[index]));
    }else{
      arrayThree.push(`${arr1[index]}${arr2[index]}`);
    }
  }
  console.log(arrayThree.join(" - "));

}


//Други решения
//1. return arr1.map((el,i)=> i % 2 == 0 ?
// Number(el) + Number(arr2[i]):el + arr2[i]);
//  
//

merge(["5", "15", "23", "56", "35"], 
      ["17", "22", "87", "36", "11"]);
