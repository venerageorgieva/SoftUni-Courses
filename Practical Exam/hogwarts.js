function hogwarts(input) {
  let spell = input.shift();

  let command = input.shift().split(" ");
  while (command[0] != "Abracadabra") {
    if (command[0] == "Abjuration") {
      spell = spell.toUpperCase();
      console.log(spell);
    } else if (command[0] == "Necromancy") {
      spell = spell.toLowerCase();
      console.log(spell);
    } else if (command[0] == "Illusion") {
      let index = Number(command[1]);

      if (index >= 0 || index < spell.length) {
        let toReplace = spell[command[1]];
        spell = spell.replace(toReplace,command[2]);
        console.log("Done!");
      } else {
        console.log("The spell was too weak.");
      }
    } else if (command[0] == "Divination") {
      let pattern = new RegExp(command[1], 'g');
      let hasWord = spell.includes(command[1]);
      if(hasWord){
          spell = spell.replace(pattern, command[2]);
      console.log(spell);
      }
      
    } else if (command[0] == "Alteration") {
      let hasWord = spell.includes(command[1]);
      if(hasWord){
         spell = spell.split(command[1]).join("");
      console.log(spell);
      }
    } else {
      console.log("The spell did not work!");
    }
    command = input.shift().split(" ");
  }
}
// hogwarts([
// 'SwordMaster',
// 'Target Target Target',
// 'Abjuration',
// 'Necromancy',
// 'Alteration master',
// 'Divination w e',
// 'Abracadabra'
// ]);
// hogwarts([
//   "TR1GG3R",
//   "Necromancy",
//   "Illusion 8 m",
//   "Illusion 9 n",
//   "Abracadabra",
// ]);


hogwarts(['A7ci0',
'Illusion 1 c',
'Illusion 4 o',
'Abjuration',
'Abracadabra'
]);


