
// forEach k call_back_function hota hai uske andar 3 parameter hote hai  Aur ye teeno optional hote hai
// (i) Value
// (ii) index
// (iii) arr(array itself)

let stateName=["Haryana","rajasthan","punjab","madhya pradesh","chandgarh","Maharastra"];

// stateName.forEach(function(sname,index,arr){
//     console.log(sname,index,arr);
    
// });

stateName.forEach((snam,index,arr,toUpperCase)=>{
    console.log(snam,index,arr);
    
});

// forEach is higher order function / methode:(" higher order function wo functions hote hai jo doosre function ko as a parameter lete hai ya
// kisi functions ko return kar rahe hote hai bhai: "

// forEach only array ke liye hai not string:

// arr is a very intresting parameter:


// Questions1: Print the any number to find a  given number to using a forEach looop:


let number=[2,3,4,11,7,8];
number.forEach(function(numb,index){
    console.log(numb*numb,index);
    
});


// In_the_form of  arrow functions:
// number.forEach((num)=>{
//     console.log(num*num);
// });














































































































