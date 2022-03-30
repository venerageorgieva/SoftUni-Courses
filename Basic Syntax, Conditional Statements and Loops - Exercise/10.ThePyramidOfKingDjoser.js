function materials(size, increment) {
  let stone = 0;
  let marble = 0;
  let lazuli = 0;
  let gold = 0;
  let steps = 1;

  while (size >= 1) {
    if (size > 2) {
      if (steps % 5 == 0) {
        lazuli += size * 4 - 4 * increment;
      } else {
        marble += size * 4 - 4 * increment;
      }
      steps++;

      stone += Math.pow(size - 2, 2) * increment;
    } else {
      gold += Math.pow(size, 2) * increment;
    }

    size -= 2;
  }
  console.log(
    `Stone required: ${Math.round(stone)}\nMarble required: ${marble}\nLapis Lazuli required: ${lazuli}\nGold required: ${Math.round(gold)}\nFinal pyramid height: ${Math.floor(
      steps * increment
    )}`
  );
}

materials(11, 0.75);
