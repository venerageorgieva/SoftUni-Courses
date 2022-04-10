function computerStore(input){


    let command = input;
    let arrayL = input.length;
    let sumPrice = 0;
    let isSpecial = false;
  

    for(let i = 0;i < arrayL;i++){
        if (Number(command[i]) < 0 ){
            console.log("Invalid price!");
        }else if (Number(command[i]) > 0){
          sumPrice+=Number(command[i]);
        }else if(command[i] === 'special'){
          isSpecial = true;
        } else if (command[i] === 'regular'){
            sumPrice = sumPrice;
        }
    }
    let taxes = sumPrice * 0.20;
    let totalPrice = 0;
    if(isSpecial){
        let discount = ((sumPrice + taxes)*0.10) ;
        totalPrice = sumPrice + taxes - discount  ;
    }else {
     totalPrice = sumPrice + taxes;
    }
    

    if(sumPrice > 0){
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sumPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }else{
        console.log('Invalid order!')
    }
    
}

computerStore([
    "1050",
"200",
"450",
"2",
"18.50",
"16.86",
"special" ]);