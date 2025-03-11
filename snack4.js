//* 🏆 Snack 4

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms) {
  return function () {
    return setTimeout(() => {
      console.log("Tempo Scaduto!");
    }, ms);
  };
}

const timer = creaTimer(2000);
timer();
