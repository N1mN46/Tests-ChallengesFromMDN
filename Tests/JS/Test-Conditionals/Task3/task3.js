let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here

if (machineActive) {
  machineResult = "Machine is active!";
  pwdResult = pwd === "cheese"
              ? "Logged in successfully"
              : "Login attempt was not successful";
} else {
  machineResult = "Machine is in bed";
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);