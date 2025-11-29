
// Operators in JS:
// (a). Ternary operators:

// Syntx:
// condtions ? true output: False output
// age>18 ? "adult":"not adult"

// let age=15;
let age=30;
let result = age>=18 ? "adult" : "not  adult"
console.log(result);



// Practice Questions;

// alert("confirm")


// let's Practice Questions1

let num = prompt("Enter a  number:");
if(num%2===0){
    console.log( num ," is multiple of 2");
    
}else{
    console.log(num,"is not multiple of 2");
    
}

// let's Practice Questions2

let score=42;
let grade;

if(score>=90 && score<=100){
    grade="A"
}else if(score>=70 && score<=89){
    grade="B"
}else if(score>=60 && socre<=69){
    grade="C"
}else if(score>=50 && score<=59){
    grade="D"
}else if(score >=0 && score<= 49){
    grade="E"
}
console.log("according to your scores, your grade was:",grade);









