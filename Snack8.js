//* 🎯 Snack 8 (Bonus)
/* Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */

function contoAllaRovescia(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
    setTimeout(() => {
      console.log(i);
      if (i === 0) {
        console.log("Tempo Scaduto");
      }
    }, num * 1000);
  }
}

contoAllaRovescia(6);
