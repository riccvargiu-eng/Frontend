// script.js
const btn = document.getElementById("run");
const out = document.getElementById("output");

// Utility per mostrare il risultato di ogni esempio
function log(title, content) {
  out.textContent += `-- ${title} --\n`;
  out.textContent +=
    (typeof content === "string" //leggi se è una stringa
      ? content
      : JSON.stringify(content, null, 2)) + "\n\n"; //se non è una stringa lancia stringfy
}

btn.addEventListener("click", () => {
  //attacchiamo un eventlistener al button
  out.textContent = "";
  // Qui inizieremo a incastrare gli esempi

  // 1. OPERATORE Ternario
  btn.addEventListener("click", () => {
    out.textContent = "";
    const numero = Math.floor(Math.random() * 10); //crea un numero da 1 a 9 (10 non compreso) randomicamente al click
    const esito =
      numero % 2 === 0 //la nostra condizione, se il resto diviso 2 è zero, il resto della divisione per 2 è zero?
        ? "pari" //scrivi pari
        : "dispari"; //altrimenti scrivi dispari (falso)
    log("Operatore ternario", `Il numero ${numero} è ${esito}`); //operatore ternario titolo-principale, esito sarà pari o dispari
    // prossimi esempi...
  });
  //Math.floor(Math.random()  //math floor arrotonda, math random lancia numero a caso, * moltipica per 10
});
