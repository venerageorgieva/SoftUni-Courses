function messageDecrypter(input) {
  let countOfInputs = Number(input.shift());
  let pattern =
    /(\$|%)([A-Z][a-z]{3,})\1:\s(\[([0-9]+)]\|)(\[([0-9]+)]\|)(\[([0-9]+)]\|)/;
  let currMessage = input.shift();
  let match = pattern.exec(currMessage);

  for (let i = 0; i < countOfInputs; i++) {
    let message = "";
    let maxLength = currMessage.split('|').length

    if (match != null && maxLength < 5) {
      message += String.fromCharCode(match[4]);
      message += String.fromCharCode(match[6]);
      message += String.fromCharCode(match[8]);
      console.log(`${match[2]}: ${message}`);
    } else {
      console.log("Valid message not found!");
    }
    currMessage = input.shift();
    match = pattern.exec(currMessage);
  }
}

// messageDecrypter([
//   "4",
//   "$Request$: [73]|[115]|[105]|",
//   "%Taggy$: [73]|[73]|[73]|",
//   "%Taggy%: [118]|[97]|[108]|",
//   "$Request$: [73]|[115]|[105]|[32]|[75]|",
// ]);

messageDecrypter([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);
