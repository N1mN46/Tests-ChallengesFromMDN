// Add your code here

const myArray = ["me", "depression", "enjoy"];

myArray[0] = "you";
myArray[1] = "dumbo";

myArray.unshift("sunray");

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);