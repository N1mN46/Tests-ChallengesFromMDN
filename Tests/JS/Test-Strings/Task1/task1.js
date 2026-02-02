const quoteStart = 'Don\'t judge each day by the harvest you reap ';

// Add your code here

const queoteEnd = 'but by the seeds you plant';

const finalQuote = `${quoteStart} ${queoteEnd}`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);