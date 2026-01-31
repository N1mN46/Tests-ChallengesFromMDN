let myName = "Paul";

// Don't edit the code above here!

// Add your code here

myName = "Artem";

// Don't edit the code below here!

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);