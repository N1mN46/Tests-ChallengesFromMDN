let season = "summer";
let response;

// Add your code here

if (season === "summer") {
    response = "OKAY, the worst season of the year is here and its a summer!!";
} else if (season === "winter") {
    response = "Not bad, but not good season, middle of all and here it is - winter";
} else {
    response = "IDK what season u have";
}


// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);