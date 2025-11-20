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

//Esercizio 1
btn.addEventListener("click", () => {
  out.textContent = "";
  let playlist = ["Heat", "Sunrise", "Echo"];
  playlist.push("Brano 1", "Brano 2");
  log("Esercizio 1 ", playlist);
  playlist.shift();
  playlist.push("Heat");
  log("Esercizio 1 ", playlist);
  let parte = playlist.slice(1, 4);
  log("Esercizio 1 ", parte);
});

//Esercizio 2
btn.addEventListener("click", () => {
  out.textContent = "";
  let coda = ["A", "B", "C", "D"];
  coda.unshift("Nuovapersona 1", "Nuovapersona 2");
  log("Esercizio 2 ", coda);
  coda.pop();
  log("Esercizio 2 ", coda);
  let ritorna = coda.splice(1, 1);
  log("Esercizio 2 ", coda);
  log("Esercizio 2 ", ritorna);
});
