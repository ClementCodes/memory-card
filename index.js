/** @format */

const cartes = document.querySelectorAll(".carte");
let carteRetournee = false;
// En dessous pour declarer une variable en undefined
let premiereCarte, secondeCarte;

let verrouillage = false;
cartes.forEach((carte) => {
  carte.addEventListener("click", retournCarte);
});

function retournCarte() {
  if (verrouillage) return;
  this.childNodes[1].classList.toggle("active");

  if (!carteRetournee) {
    carteRetournee = true;
    premiereCarte = this;
    return;
  }

  carteRetournee = false;
  secondeCarte = this;

  console.log(premiereCarte, secondeCarte);

  correspondance();
}

function correspondance() {
  if (
    premiereCarte.getAttribute("data-attr") ===
    secondeCarte.getAttribute("data-attr")
  ) {
    premiereCarte.removeEventListener("click", retournCarte);
    secondeCarte.removeEventListener("click", retournCarte);
  } else {
    verrouillage = true;
    setTimeout(() => {
      premiereCarte.childNodes[1].classList.remove("active");
      secondeCarte.childNodes[1].classList.remove("active");
      verrouillage = false;
    }, 1500);
  }
}

function aleatoire() {
  cartes.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
aleatoire();
