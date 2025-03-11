//* 🏆 Snack 6

/* Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo. */

function creaContatoreAutomatico(ms) {
  return function () {
    let counter = 0;
    const timer = setInterval(() => {
      counter++;
      console.log(`contatore ${counter}`);
    }, ms);
    return timer;
  };
}

const start = creaContatoreAutomatico(1000);
const conta = start();

setTimeout(() => {
  clearInterval(conta);
  console.log("Stop");
}, 10000);
