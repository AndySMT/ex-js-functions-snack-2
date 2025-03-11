//* 🏆 Snack 1

//? Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(a, b) {
  return a + b;
}
console.log(somma(7, 7));

//? Definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaAnonima = function (a, b) {
  return a + b;
};
console.log(sommaAnonima(5, 5));

//? riscrivi la funzione somma con la sintassi delle arrow functions

const sommaArrow = (a, b) => a + b;
console.log(sommaArrow(4, 3));
