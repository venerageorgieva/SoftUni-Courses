function reception(input) {
  let efficiency = Number(input[0]) + Number(input[1]) + Number(input[2]);
  let students = Number(input[3]);
  let hour = 0;

  while (students > 0) {
    hour++;
    if (hour % 4 === 0) {
    } else {
      students -= efficiency;
    }
  }

  console.log(`Time needed: ${hour}h.`);
}

reception(["3", "2", "5", "40"]);
