// DOM Manipulations:

// Properties:----> iske throw hum value ko check bhi kar shkatehai aur set bhi kar shakte hai and change bhi kar shkate hai

// (i)"tagName":(variable_name.tagName)
// (ii)"innerText"()
// (iii)"innerHTML"
// (iv)"textContent"


// let div2 = document.querySelector("div");
// console.dir(div2);


// Questions1: Create a H2 heading element with text - "Hellllo JavaScript" . Append "from code_with_ahmad.com" to this using JS


let h2= document.querySelector("h2");

console.dir(h2);

// ab humko text ko add karna hai iske liye innerText ya innerHTML ka use karenege:

console.dir(h2.innerText);
h2.innerText =h2.innerText + "from code_with_ahmad.com"; // concatenate:


let divs = document.querySelectorAll("div");
console.dir(divs[2])

divs[1].innerText = "Kadir_bhaiya";
divs[0].innerHTML="UmarAnsari";




















