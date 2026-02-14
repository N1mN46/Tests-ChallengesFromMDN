const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Add your code here

function chooseName() {
    const randomNum = Math.floor(Math.random() * names.length);
    const randomChoice = names[randomNum];
    para.textContent = randomChoice;
}

chooseName();