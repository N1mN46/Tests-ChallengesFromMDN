const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// Don't edit the code above here!

// Add your code here

for (let array of myArray) {
    const listItem = document.createElement("li");
    listItem.textContent = array;
    list.appendChild(listItem);
}

