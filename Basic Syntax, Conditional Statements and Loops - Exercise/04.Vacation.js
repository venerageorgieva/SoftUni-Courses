function solve(count, type, dayOfWeek) {
  //             Friday	Saturday	Sunday
  //  Students   	8.45	9.80	   10.46
  //  Business   10.90	15.60	    16
  //  Regular     15	    20	       22.50

  //·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
  //·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
  //·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%

  let price = 0;
  switch (dayOfWeek) {
    case "Friday":
      if (type === "Students") {
        price += 8.45;
        if (count >= 30) {
          price = price * 0.85;
        }
      } else if (type === "Business") {
        price += 10.9;
        if (count >= 100) {
          count-=10;
        }
      } else if (type === "Regular") {
        price += 15;
        if (count >= 10 && count <= 20) {
          price = price * 0.95;
        }
      }
      break;
    case "Saturday":
      if (type === "Students") {
        price += 9.8;
        if (count >= 30) {
          price = price * 0.85;
        }
      } else if (type === "Business") {
        price += 15.6;
        if (count >= 100) {
          count-=10;
        }
      } else if (type === "Regular") {
        price += 20;
        if (count >= 10 && count <= 20) {
          price = price * 0.95;
        }
      }
      break;
    case "Sunday":
      if (type === "Students") {
        price += 10.46;
        if (count >= 30) {
          price = price * 0.85;
        }
      } else if (type === "Business") {
        price += 16;
        if (count >= 100) {
         count-=10;
        }
      } else if (type === "Regular") {
        price += 22.5;
        if (count >= 10 && count <= 20) {
          price = price * 0.95;
        }
      }
      break;
  }
  let sum = count * price;
  console.log(`Total price: ${sum.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");
