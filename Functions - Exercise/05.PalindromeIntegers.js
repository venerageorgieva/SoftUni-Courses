function palindromIntegers(input) {
  let arrayOfNumbers = input;
  let inputL = arrayOfNumbers.length;

  const isPalindrom = (num) => {
    let startNum = num;
    let reversedNum = Number(num.toString().split("").reverse().join(""));
    if (startNum === reversedNum) {
      return "true";
    } else {
      return "false";
    }
  };

  for (let i = 0; i < inputL; i++) {
    let currentNumber = arrayOfNumbers[i];
    console.log(isPalindrom(currentNumber));
  }
}

palindromIntegers([123, 323, 421, 121]);
