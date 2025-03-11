//* 🏆 Snack 5

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(str) {
  const stop = setInterval(() => {
    console.log(str);
  }, 1000);
  return stop;
}

const stampa = stampaOgniSecondo("Sto contando");

// Interrompilo manualmente o usa clearInterval() in un altro script.
setTimeout(() => {
  clearInterval(stampa);
  console.log("Stop");
}, 10000);
