// Data Types in js :
// a.Number
// b. String
// c. Boolean
// d. Undefined
// e.Null
// f. BigInt
// g.Symbols

// Primitive Data types:(7)
// Non -primitive:(Array.Object,)


// Number:
let age =22;
console.log(typeof age);
// String:

let full_Name="umar";
console.log(typeof full_Name);

// Boolean:
 isFallow=true;
console.log(typeof isFallow);


// undefined:
let x;  
console.log(typeof x);

// Object:
let a=null;
console.log(typeof a);

// BigInt:
let m=BigInt("222");
// console.log( m);
console.log(typeof m);




// {
//     let a=12;
//     console.log(a);
//     let y=12;
//     console.log(y);
    
    
// }



// Non-Primitive:
// a.Object
// b.Array
// How to create a Object:

// how to declare a Object 
// a.Const:



// Object Format of (key:value)
// -----------------------------
const employee={
    age:12,
cgpa:8.28,
    full_Name:"Umar",
    isPass:true
};

// a.Let ko update nahi kar shakte hai 
// b.const ko update nahi kar shkate hai 
// lekin const ke Object ke key ko update kar shakte  hai

// console.log(employee);
// console.log(typeof employee);

// How to access a full_Name:
// console.log(employee["full_Name"]);
// console.log(employee["cgpa"]);

// Where key is given:(age,full_Name,cgpa,isPass)
// Therea are two type of access to value

// first of ...a.   obj.key
console.log(employee.age);
//             b.   obj["key"]
console.log(employee["age"]);

// Assignment operators:
console.log(employee["age"]+12);
console.log(employee["full_Name"]);


// and value is given(12,8.28,Umar,etc)