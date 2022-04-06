function modification(number) {
    let numberAsString = number.toString()
    let averageSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        averageSum += Number(numberAsString[i]);

    }
    averageSum /= numberAsString.length;

    while (averageSum < 5) {

        for (let i = 0; i < numberAsString.length; i++) {

            averageSum += Number(numberAsString[i]);

        }
        averageSum /= numberAsString.length;

        numberAsString += 9;

    }
    console.log(numberAsString);
}
modification(101)