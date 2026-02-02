const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here

let fixedQuote = quote.toLowerCase();
const firstLtr = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLtr, firstLtr.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "milk with anything");
const finalQuote = `${fixedQuote}.`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);