const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here

myArray.pop();

myArray.push("Bob", "Nika");

myArray.forEach((element, index) => {
    const isElement = `${element} (${index})`;
    myArray[index] = isElement;
});

const myString = myArray.join(" - ");

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);