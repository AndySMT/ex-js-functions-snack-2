//*🏆 Snack 3
/* Crea una funzione eseguiOperazione
.  */

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback)
function eseguiOperazione(a, b, operatore) {
  return operatore(a, b);
}

// La funzione deve eseguire l'operazione fornita sui due numeri.
const somma = (a, b) => a + b;
const sottrai = (a, b) => a - b;
const moltiplica = (a, b) => a * b;
const dividi = (a, b) => (b !== 0 ? a / b : "Stai dividento per zero");

console.log(eseguiOperazione(2, 7, somma));
console.log(eseguiOperazione(2, 3, moltiplica));
console.log(eseguiOperazione(6, 3, dividi));
console.log(eseguiOperazione(7, 5, sottrai));
console.log(eseguiOperazione(6, 0, dividi));
