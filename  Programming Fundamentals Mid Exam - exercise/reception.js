function reception(input) {
  let emp1 = Number(input.shift());
  let emp2 = Number(input.shift());
  let emp3 = Number(input.shift());
  let efficiency = emp1 + emp2 + emp3;
  let hours = 0;

  let studentsCount = Number(input.shift());

  while (studentsCount > 0) {
    hours++;
    if (hours % 4 == 0) {
    } else {
      studentsCount -= efficiency;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}

reception(["5", "6", "4", "20"]);
reception(['1','2','3','45']);
reception(['3','2','5','40']);