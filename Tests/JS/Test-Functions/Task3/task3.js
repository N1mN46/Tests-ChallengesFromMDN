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

// Update the code below here

function random(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);