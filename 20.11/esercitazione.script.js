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
});

//Esercizio 1.1
btn.addEventListener("click", () => {
  out.textContent = "";
  let playlist = ["Heat", "Sunrise", "Echo"];
  playlist.push("Brano 1", "Brano 2");
  log("Esercizio 1.1 ", playlist);
  playlist.shift();
  playlist.push("Heat");
  log("Esercizio 1.1 ", playlist);
  let parte = playlist.slice(1, 4);
  log("Esercizio 1.1 ", parte);
});

//Esercizio 1.2
btn.addEventListener("click", () => {
  out.textContent = "";
  let coda = ["A", "B", "C", "D"];
  coda.unshift("Nuovapersona 1", "Nuovapersona 2");
  log("Esercizio 1.2 ", coda);
  coda.pop();
  log("Esercizio 1.2 ", coda);
  let ritorna = coda.splice(1, 1);
  log("Esercizio 1.2 ", coda);
  log("Esercizio 1.2 ", ritorna);
});

//Esercizio 1.3
btn.addEventListener("click", () => {
  out.textContent = "";
  let numeri = [5, 3, 9, 1, 4];
  numeri.shift();
  numeri.pop();
  numeri.push(7);
  log("Esercizio 1.3 ", numeri);
  let sottoserie = numeri.slice(0, 2);
  log("Esercizio 1.3 ", sottoserie);
});

//Esercizio 1.4
btn.addEventListener("click", () => {
  out.textContent = "";
  let regali = ["Libro", "Puzzle", "Sciarpa"];
  regali.unshift("Regalo 1", "Regalo 2");
  log("Esercizio 1.4 ", regali);
  regali.splice(1, 1);
  log("Esercizio 1.4 ", regali);
  let copia = regali.slice(2, 5); //slice copia senza modificare
  log("Esercizio 1.4 ", copia);
});

//Esercizio 1.5
btn.addEventListener("click", () => {
  out.textContent = "";
  let messaggi = ["hey", "ciao", "tutto bene?", "ok"];
  messaggi.push("Messaggio 1");
  messaggi.unshift("Messaggio 2");
  log("Esercizio 1.5 ", messaggi);
  messaggi.pop();
  log("Esercizio 1.5 ", messaggi);
  let messaggicentrali = messaggi.slice(1, 4);
  log("Esercizio 1.5 ", messaggicentrali);
});
