function solve(age){

    let sum = "";

    if(age >= 0 && age <= 2){
     sum = "baby"
    }else if(age > 2 && age <= 13){
        sum = "child";
    }else if(age > 13 && age <= 19){
        sum = "teenager";
    }else if(age > 19 && age <= 65){
        sum = "adult";
    }else if(age >= 66){
        sum = "elder";
    }else {
        sum = "out of bounds";
    }

    console.log(sum)
}

solve(-1)


//·	0-2 (age) – is a baby;   
//·	3-13 (age) – is a child; 
//·	14-19 (age) – is a teenager;
//·	20-65 (age) – is an adult;
//·	>=66 (age) – is an elder; 
//·	In all other cases print – "out of bounds";


