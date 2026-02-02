let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here

const number1 = 20;
const number2 = 40;
const number3 = 70;
const number4 = 1000;

const summOfTwo = number1 + number2;
const substractOfTwo = number3 - number4;

finalResult = summOfTwo * substractOfTwo;

evenOddResult = finalResult % 2;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);