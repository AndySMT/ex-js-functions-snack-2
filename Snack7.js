//*🏆 Snack 7

/* Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
 */
function eseguiEferma(ms, stop, mess) {
  const timer = setInterval(() => {
    console.log(mess);
  }, ms);
  setTimeout((stop) => {
    clearInterval(timer);
    console.log("Fermo timer");
  }, stop);
}

eseguiEferma(1000, 10000, "Start/Stop");
