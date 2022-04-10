function average(input) {
  let array = input.split(" ").map(Number);

  let topNumber = array[0];
  let avgNum = 0;
  let finalScore = [];

  for (let i = 0; i < array.length; i++) {
    currentElement = array[i];
    if (currentElement > topNumber) {
      topNumber = currentElement;
    }
    avgNum += array[i];
  }

  let avgSum = avgNum / array.length;

  for (let i = 0; i < array.length; i++) {
    if (avgSum < array[i]) {
      finalScore.push(array[i]);
    }
  }
  finalScore.sort((a, b) => b - a);

  if (avgSum === topNumber) {
    console.log("No");
  } else {
    let modArray = finalScore.slice(0, 5);
    console.log(modArray.join(" "));
  }
}
average("-1 -2 -3 -4 -5 -6");
