/* DOM:(When a web page is loaded, the browser create a Documnet object Modal(DOM) of the page:)
 iske throw hum HTML ka code access kar shakte hai 
 kaise 
 console mai jake 

 window
 search karke document mai jao sara code dikha jayega 

 second methods
 window.document ye bhai

 third 
 console.dir(window.document)

ISke throw access kar shakte hai bhai:


window---->document----->head---->body ect.


DOM Manipulations:
(i) Selecting with id:(document.getElementById("myId"))
(ii) Selecting with  class:(document.getElementById("myClass"))
(iii) Selecting with tag:(document.getElementByTagName("p"))

*/
// (i) Selecting with id:(document.getElementById("myId"))
 let heading =document.getElementById("heading2");

console.dir(heading);
// console.log(heading); // aapka heading ka statement poora print karega lekin hume ye nahi karna hai



// (ii) Selecting with  class:(document.getElementById("myClass"))
let kadi =document.getElementsByClassName("kad")

console.dir(kadi);
// console.log(kadi);


// (iii) Selecting with tag:(document.getElementByTagName("p"))

let paraG =document.getElementsByTagName("p");
console.dir(paraG);



// There are three type of access to the html code and its property:













































































