const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here

const indexEagles = birds.indexOf("Eagles");

birds.splice(indexEagles, 1);

function eStart(bird){
  return bird.startsWith("E");
}

const eBirds = birds.filter(eStart);

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);