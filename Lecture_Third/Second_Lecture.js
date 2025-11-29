/*
4. There are some special types of loops:

Some special data types:

           (i) For-of("String aur Array("Object ke liye use nahi karte hai") ke uppar loop lagane mai help karte hai ")
           (ii) For-in("Isko hum object ke key ke liye use karte hai:")

            How to declare a variable :
            */

// Syntax of for-of:

let trs ="Umar";
for(let i of trs ){
    console.log("i:",i);
}


// Syntax and how to calculate a size of string :


// i ya value likho kuch bhi likha ja shkata hai:

let str ="Mohammad_Umar";
let size=0;

for(let val of str){
    console.log("val:",val );
    size++;
}

console.log("string size",size);

// Syntax of for-in:
// Create a object:

let employee = {
    Name:"Umar",
    age:22,
    salary:22000,
    isJoin:false,
};

for( let key in employee){

    // console.log(i);

    //   How to access a keys:
    console.log("key:",key , "value:", employee[key]);
    
 
}


// Let's Practice:

// Print all even or odd number forms 0 to 100:

//  for odd number:
for( let num =0; num<=100;num++){
    if(num%2!=0){
        console.log("num",num);
        
    }
   
}

//For even number
for( let num =0; num<=100;num++){
    if(num%2==0){
        console.log("num",num);
        
    }
   
}



































