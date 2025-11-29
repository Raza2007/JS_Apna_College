
// ---> "String Methods in JS:"
// These are built-in functions to manipulating a string:
// Therea are differnt types of methods of strings:
/*
(ii)str.toLowerCase ("jo string hai uska original value change nahi hoga ye new string bna daga")
(i) str.toUpperCase ("jo string hai uska original value change nahi hoga ye new string bna daga")
(iii)str.trim // removes whitespace:

Main ye 3 the:
Yaha tk read kar liya hai :

(iv) str.slice(start , end?) // returns part of string("Iska matlab hai ki starting number do aur ending number do tau uske beech ka string de dega")
(v)str1.concat(str2)            // joins str2 with str1
(vi)str.replace(searchVal,newVal) 
(vii)str.charAt(idx)
*/

/*
 (iv) str.slice(start , end?) 
-----------------------------------
 returns part of string("Iska matlab hai ki starting number do aur ending number do tau uske beech ka string de dega")
 */

let str0 ="Jamia Milia Islamia University Delhi";
let str ="1234567890";
console.log(str.slice(3,4));

console.log(str0.slice(3,7));

// (v)str1.concat(str2)--> Do string ko add karna :["Concatinations"]

let str4="mohd";
let str5="owes";
// string ko add karna hai tau + ka sign lagakar bhi add kar shkate hai:
let result=str4+str5;
console.log(result);

// second method:

// let result =str4.concat(str5);
// console.log(result);

// Third methods:

let name= str5.concat(str4);
console.log(name);

// let str4="mohd";
// let str5="owes";
// console.log(str4.concat(str5));


// (vi)str.replace(searchVal,newVal) ----->["replace methods string ke andar kisi cheez ko search karne ke liye jata hai:"]

// First i.e:
let str2="hellllllo";
console.log(str2.replace("h","S"));

// Second if.e:
let strm="Rajasthan is the most historical place in our india";
console.log(strm.replace("Rajasthan","Agra"));

// Third i.e:
let str1="Hyper text marcup of language";
console.log(str1.replace("Hyper","Sayper"));

// (vii)str.charAt(idx)---->[Kisi bhi index pr koi character find out and  return karwana hai:]

// First example:
let str10="ILOVEJS"
console.log(str10.charAt(3));//V


// Second Example:

let age ="twentyEight";
console.log(age.charAt(7));//i


// Third Example:

let stateName="Haryan and Jammu kashmir and Hydrabad";
console.log(stateName.charAt(19));//s


// Original string is inmutiable:






















