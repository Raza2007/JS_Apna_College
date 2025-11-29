
/*
String_In_JS("String is a sequence of character used to represent text:")

(i) Create String:
----------------------
let str ="Integarl";

(ii) String Length:
-----------------------
str.length

(iii) String index:

str[0],str[1],str[2]


*/

let str1="Integral";
let str2="University";

console.log(str2);
console.log(str1);

// How to access a length in this given string 

console.log(str2.length);

// (iii) String index:
console.log(str1[4]);



// Template Literal in JS:("A way to have embadded expressionsin string: ")
// ---------------------------------

// `this is template literals:`

let specialsString=`this is template literals`;
console.log(specialsString);

// iska type bhi pta kar shakte hai:

console.log( typeof specialsString);

let obj ={
    item:"pen",
    price:100
};
let output = 'the cost of $ {obj.item}  is ${ob.price} rupess';
console.log(output);

// console.log("the cost of ",obj.item ,"is",obj.price,"rupees");
// console.log();

// escape character:(\n---> next line and \t ---> tab:)

// let str="kadir "
// console.log("Umar\nBhai");
// console.log(str.length)


/*
---> "String Methods in JS:"
These are built-in functions to manipulating a string:
Therea are differnt types of methods of strings:

(ii)str.toLowerCase ("jo string hai uska original value change nahi hoga ye new string bna daga")
(i) str.toUpperCase ("jo string hai uska original value change nahi hoga ye new string bna daga")
(iii)str.trim // removes whitespace:
(iv) str.slice(start , end?) // returns part of string
(v)str1.concat(str2)            // joins str2 with str1
(vi)str.replace(searchVal,newVal) 
(vii)str.charAt(idx)




*/
// let firstName="integral university";
let st ="MOHD";
// console.log(firstName.toUpperCase());
console.log(st.toLowerCase());


// jo string hai uska original value change nahi hoga ye new string bna daga


let umarName="University of Allahabad"
let newumarName= umarName.toUpperCase();
console.log(umarName);
console.log(newumarName);



// console.log(umarName.toUpperCase());
// console.log(umarName);


// (iii)str.trim // removes whitespace::

let str3 ="                CSS IS STAND FOR CASCADING STYLE SHEET             ";
console.log(str3.trim());












































































































