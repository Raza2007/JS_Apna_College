/*
 Array_In_JS:("Array is a collections of items:")
 ---------------------------------------------------
 let heroes=["SRK","Ironmen","thor","batmen"];
 let marks=[93,33,32,56,88];
 let info =["Umar",18,"Aazamgarh"];
 */
/*
 Agar humko kisi student ke marks store karana ho tau:
 Case1:

 let marks_student1=34;
 let marks_student2=32;// Lekin agar jada student ho jaye tau ye lagbhag impossible hai:


 Case2:(marks name ke ek object bna lete hai:)

 let marks={
    stu1=22,
    stu2=23,
    
    .
    .
    .
    .
    stuN=n;
 }// Lagbhag ye methods bhi sahi nahi hai 
 isiliye third case sabse sahi hai:
*/



let marks=[12,33,44,55,66,77,88,99];

// Array Index:
// arr[0];
// arr[1]
// arr[2];

// console.log(marks);

// console.log(marks[3]);
console.log(marks[9]);//undefined
console.log(marks.length);


// Agar kisi specific locations pr agar Number ko change karne ha tau arr[index number]=Jo number pe aapko rakhna hai:
// (i)  String js mai immutable hota hai:
// (ii) Array js mai mutable hota hai

// console.log(marks[2]=100);

console.log(marks[2]=11);
console.log(marks);


// console.log(marks);
console.log(marks.length);


let name=["umar","ahmad","raja"];
console.log(name);

// length:
// ------------

console.log(name.length);

// Find a  types:
// ----------------
console.log(typeof(name));

/*
Looping over in array:
 Print all array index:

Agar kisi array ka size nahi pta hai tau uske liye aap uska length find karke loop lga do sara data print ho jayega :
*/
// For loop:
// While loop:
// Do while loop:

let mar=[12,33,44,22,11,13,23,45,65,43,22,55,66,77,88,99];

console.log(mar);
console.log(mar.length);

// For loop:
// for(i=0;i<16;i++){
//     console.log(mar);
    
// }


while(mar<17){
    console.log(mar);
    mar++;
}

// Using Do while loop:

do{
    console.log(mar);
    mar++;
    
}while(mar<17);



 // Using for-of loop:
//  ----------------------

 let number=[12,33,44,22,11,13,23,45,65,43,22,55,66,77,88,9999];

 for(let el of number){
    console.log(number);
    
 }
console.log(number.length);

// Using for-of loop:
// --------------------------
let stateName=["uttar pardesh","chandiarh","maharastra","Rajsathan","Madhya Pradesh"];
for(let el of stateName){
    console.log(stateName);
    
}
console.log(stateName.length);

for( let el of stateName){
    console.log(stateName[2]="Haryana");
    
}
console.log(stateName);



// Specific stateName:
// ------------------------

for(let el of stateName){
    console.log(stateName[3]="Uttrakahnd");
    
}
console.log(stateName);
















