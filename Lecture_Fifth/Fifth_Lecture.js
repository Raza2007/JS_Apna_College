// Some More array methode:(Create a new array with the result of some operations. The value its callback returns are used to from new array)

// (i) Map:
// (ii)Filter:
// (iii)Reduce:
// Basic syantax of Map:(Array methods:)
// --------------------------------------------
// arr.map(call_back_fun(value,index,array))


// let newArr =Array.map((val)=>{
//     return val*2;
// });

let age=[22,34,54,23,566,77,5,5,33,33];

let newAge=age.map((val)=>{
return val;
});
console.log(newAge);



let state=["Maharastra","Chandigarh", "Gujrat","Punjab","Rajasthan"];

let newState=state.map((sta)=>{
    return sta;
});

console.log(newState);


age.map((val)=>{
console.log(val);

});

// forEach and map is very similar:

age.map(function(val){
    console.log(val);
    
});

//(ii)Filter:("Create a new array of element thatgives true for a conditions / filter E.G: all even number:")


// Syntax of Filter:

// let newArr=Array.Filter((val)=>{
//     return val % 2==0;
// });


let number = [1,2,3,4,5,6,7,8,9,10,33,22,54];

     let evenNum  = number.filter((num)=>{
    return num %2==0;
});

console.log(evenNum);

// Reduce:






































