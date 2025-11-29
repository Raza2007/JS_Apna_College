

// DOM Manipulations:(DOM PART 2)

// (i) Attributes:
// -----------------------:
// 1.getAttribute(attr) // to get the attribute value
// 2.setAttribute(attr,value) // to set the attribute val th

// Node.style




let div = document.querySelector("div");

console.log(div);

div.getAttribute("id")

let id= div.getAttribute("id")

console.dir(id)



// let para = document.querySelector("p")

// console.log(para.getAttribute("class"));


// 2.setAttribute(attr,value) 

let para = document.querySelector("p")

console.log(para.setAttribute("class","newClass"));


// agar humko dynamically change karna hai tau us attribute ka name.setAttribute("class name","newclass")


let div2 = document.querySelector("div")

// console.log(div2);

div.style.backgroundColor ="black";
div.style.color ="yellow";

















