//*🎯 Snack 10 (Bonus)
/* Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi */

function creaThrottler(callback, ms) {
  let execute = true;
  return function () {
    if (!execute) {
      console.log("Troppo presto");
      return;
    }
    execute = false;
    callback();
    setTimeout(() => {
      execute = true;
    }, ms);
  };
}

const log = creaThrottler(() => console.log("Eseguito"), 1000);

log();
log();
setTimeout(log, 3000);
