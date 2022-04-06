function carWash(command){
    let arrayL = command.length;

    function cleaningProcedure(procedure){
        let value = 0;
           for (let i = 0; i < arrayL; i++) {
        let currentCommand = command[i];
      // •	soap – add 10 to the value
      // •	water – increase the value by 20%
      // •	vacuum cleaner – increase the value by 25%
      // •	mud – decrease the value by 10%
      if(currentCommand === "soap"){
          value+=10;
      }else if (currentCommand === "water"){
          value =value +(value * 0.20) ;
      }else if(currentCommand === "vacuum cleaner"){
          value = value +(value * 0.25) ;
      }else if(currentCommand === "mud") {
          value = value - (value * 0.10) 
      }
        }

        return value;
    }
 
    let result = cleaningProcedure(command);

    console.log(`The car is ${result.toFixed(2)}% clean.`);

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])