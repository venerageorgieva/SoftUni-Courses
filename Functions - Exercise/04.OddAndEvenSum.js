function oddAndEven(input) {
  let inputAsString = input.toString();
  let inputL = inputAsString.length;
  let takeOddSum = function (numAsString) {
    let oddSum = 0;
    for (let index = 0; index < inputL; index++) {
      let currentElement = Number(numAsString[index]);
      if (currentElement % 2 !== 0) {
        oddSum += currentElement;
      }
    }
    return oddSum;
  };
  let takeEvenSum = (numAsString) => {
    let evenSum = 0;
    for (let index = 0; index < inputL; index++) {
      let currentElement = Number(numAsString[index]);
      if (currentElement % 2 === 0) {
        evenSum += currentElement;
      }
    }
    return evenSum;
  };

  console.log(
    `Odd sum = ${takeOddSum(inputAsString)}, Even sum = ${takeEvenSum(
      inputAsString
    )}`
  );
}

oddAndEven(1000435);
