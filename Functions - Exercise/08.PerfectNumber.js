function perfectNumber(number){
  let sum = 0;

  for (let i = 0; i < number; i++) {
      if(number % i === 0){
          sum += i;
      }
  }

  if (sum === number){
      return 'We have a perfect number!';
  } else {
      return 'It\'s not so perfect.'
  }
}

let result = perfectNumber(6);
console.log(result);