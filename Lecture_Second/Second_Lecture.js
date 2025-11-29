// Operators:
// Assignment operators:(To assign a value:)
// (=,+=,-=,%=,**=)
// for ie:
// a+ =1
// ya a=a+1 both are same:

let a = 12;
a -= 4;
console.log("a:", a);

let v = 21;
v += 4;
console.log("v:", v);

let m = 100;
// m /=10;
// m %=10
m **= 2;
console.log("m:", m);

// C.Comaparison operators:(To compare the number:)
// (==,!=,!==,>=,<=,>,<)

let r = 12;
let s = 6;
let k = "12";
console.log("r==k", r == k);
console.log("r===k", r === k); //strict(=== or !==)

// console.log("r==s:", r==s);
// console.log("r=!s:", r=!s);
console.log("r>s", r > s);

console.log("r!=s:", r != s);

// Operators in js:
// --------------------------
// Logical operators:(&&[AND],||[OR],![NOT])


// a.[AND]:Isme sabhi conditions sahi hone chaiye tabhi ye true print karega:
// b.[OR !]:Isme KOI EK  conditions sahi hone chaiye tau ye true print karega:

let p=6;
let q=3;

let cond1 = p >= q; //true

// let cond2 =  p===q; //true
let cond2 =  p===q; //false
console.log("cond1 && cond2:",cond1 && cond2);



// b.[ LOGICAL OR !]:Isme KOI EK  conditions sahi hone chaiye tau ye true print karega:

let t=12
let u=13;


cond1 = t>u //false
cond2 =t<u // true
 console.log("cond1 || cond2", cond1 || cond2);
 
// t>u;
// t<u;
// console.log("t>u || t<u",t>u || t<u);


// LOGICAL Not(!)("Ye aapko opposite value dega ")
// let c=6;;
// let d=5;

// console.log("!(6<5):", !(c<d));
let c=644;
let d=544;
console.log("!(644<544",!(c<d));

