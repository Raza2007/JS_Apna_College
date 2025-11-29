//  -----forEach Loop in Arras:------------------
// JavaScript me forEach() ek Array method hota hai jo array ke har element par ek function ko execute karta hai. Ye loop ki tarah kaam karta hai, lekin simpler aur readable hota hai.
//  

// arr.forEach(callBackFunction)



// ------------------------------------
// arr.forEach((val)=>{
//     console.log(val);
    
// });// Syntax of the forEach:
// -------------------------------------
// Syntax

// array.forEach(function(element, index, array) {
//     // code
// });

// Simple Example:
// -----------------

let numbers2 = [10, 20, 30, 40];

numbers2.forEach(function(num){
    console.log(num);
});

let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(frui){
    console.log(frui);
    
})
// Use kab karte hain-
// -----------------------

// Jab array ke har element ko print karna ho
stateName.f
// Jab array ke elements par koi operation karna ho

// Jab loop likhne ka simple tareeka chahiye.



let name=["kadir","Dilawar","Raja","Raza","Khan","mohammad"];
name.forEach(function printStr(str){
    console.log(str);
    //  console.log(str.toUpperCase());
    

});


let age=[12,33,44,54,22,12];
// age.forEach(function printVal(val){
//     console.log(val);
    
// });

// Second_type:
// arrowFunctions:
age.forEach((number)=>{
    console.log(number);
    // console.log(number.toString());
    
})



let numbers = [10, 20, 30, 40];

numbers.forEach(function (num,ind){
    console.log(num,ind);
    
});
 
// iN the form of arrowfunctions:

numbers.forEach((num)=>{
console.log(num);

})

let stateName=["Uttar pradesh","Madhya pradesh","Chandugarh","Rajasthan","Jammu & Kashmir"];

// orEach(function(sname){
//     console.log(sname);
    
// });

// Agar sath mai index number nhi chahiye tau:

stateName.forEach(function(sname,index){
    console.log(sname,index);
    
});



// In the form of arrowFunctions:


stateName.forEach((sname)=>{
console.log(sname.toUpperCase());

});












































