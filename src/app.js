/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

function main() {
  document.getElementById("Boton").addEventListener("click", changeCard);
  //console.log("estoy harta de gitpod");
}
function changeCard() {
  let poker = ["heart", "spades", "club", "diamond"];
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
}
let numberRandom = Math.floor(Math.random() * card.length);
console.log(card[numberRandom]);

let elementCard = document.querySelector(".Card");
let elementNumber = document.querySelector(".Number");
elementNumber.innerHTML = card[numberRandom];

let randomPoker = poker[Math.floor(Math.random() * poker.length)];
elementCard.className = "Card";
elementCard.classList.add(randomPoker);

window.addEventListener("load", () => main());
