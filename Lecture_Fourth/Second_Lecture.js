/*
 ARRAY_IN_JS:
 array_methods:

 (i) PUSH():--> add to end.
 (ii) POP():---> delete from end & return.
 (iii) toString():---> convert array to string.
 (iv) Concat()----> joins multiple array & returns result:
(v) unshift()----> add to start
(vi) shift()-----> delete from start & return.
(vii) Slice()-----> returns a piecce of the array
(viii)Splice()-------> change original array(add,remove,replace)
 */


//  (i) PUSH():--> add to end.

let veg =["potato","tomato","brinjal",];
console.log(veg);

console.log(veg.push("pea"));


let marks=[12,33,44,32,123]
console.log(marks);
// console.log(marks.push(100));
console.log(marks.push(1000,20000,23232));
console.log(marks);


// Multiple veg add karna hai:("Original array ko change kar deta hai:")
console.log(veg.push("Ginger","Onion","lemon",));
console.log(veg);


//  (ii) POP():---> delete from end & return.
// ------------------------------------------------

let veg2 =["potato","tomato","brinjal",];
console.log(veg2);
console.log(veg2.pop());
console.log(veg2);


let marks1=[12,33,44,32,123]
console.log(marks1.pop());
console.log(marks1);



//  (iii) toString():---> convert array to string.

let veg3 =["potato","tomato","brinjal",];
console.log(veg3);
console.log(veg3.toString());




// toString_Operations:
// ------------------------------
// In forms a number:
// -------------------
let arr=[12,3,44,32,2222,123,44];
console.log(arr);
console.log(arr.toString());


// (iv) Concat()----> joins multiple array & returns result:
// ("original array ke andar change nahi karta hai:") new array return karta hai

// let family =["ahmad","kadir","fatima"];
// let family2=["Hussain","Raja","Riyaj"];
// let total_family=family.concat(family2)
// console.log(total_family);
let marks3=[23,44,53,21,34,67,88]

//  toString mai convert karna:
console.log(marks3.toString());


// Joins multiple array & returns result:
// concat:
let marks4=[230,484,538,251,334,627,838]
let total_marks8=marks3.concat(marks4);
console.log(total_marks8);




// (v) unshift()----> add to start:

let age =[23,2,44,56,77];
console.log(age.unshift(100));
console.log(age);

let name=["raja","mohd","kadir"];
console.log(name.unshift("Dilawar"));
console.log(name);


// (vi) shift()-----> delete from start & return.


let name2=["raja","mohd","kadir"];

console.log(name2.shift());
console.log(name2);
// console.log(name2.toString());

// (vii) Slice()-----> returns a piecce of the array

let umar=[12,33,44,55,32,11]
console.log(umar.slice(1,3));
console.log(umar);

let name5=["raja","mohd","kadir","Ahmad","Khan"];
console.log(name5.slice(0,3));


// (viii)Splice()-------> change original array(add,remove,replace)


let college=["integral","BBD","Chandigarh","AMu"];
console.log(college.splice(1,2));
console.log(college);


let umar1=[12,33,44,55,32,11]
// console.log(umar1.splice(1,3)); // Matlab ye hai ki  jaha se number start ho raha hai aur jaha tak jayega waha tak number katega :  
// console.log(umar1);

// add element:

// console.log(umar1.splice(4,1,777)); // iska matlab hai ki jisindex pr number add karna hai uska index number,1,jo number aapko put karna hai
// console.log(umar1);

// delete Element or multiple number

// console.log(umar1.splice(3,1)); // iska matlab hai ki jiska number delete karna hai uska index number ,one elemnet delete karna hai
// console.log(umar1);


// replace Element:

console.log(umar1.splice(1,1,100)); //  iska matlab hai ki  jis index pr number ko replace karna hai uska index likho aur , 1 element ko delete 
                                                           // aur jo number rakhan chahte ho uske place pr wo number
console.log(umar1);



