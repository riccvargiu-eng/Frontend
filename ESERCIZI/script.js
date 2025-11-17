let utenti = [];

document.getElementById("btnAggiungi").onclick = function () {
  const nome = document.getElementById("nome").value;
  const eta = document.getElementById("eta").value;
  const professione = document.getElementById("professione").value;
  const lista = document.getElementById("lista");

  if (!nome) {
    console.error("Nome mancante!");
    return;
  }
  if (eta <= 0) {
    console.error("Età non valida!");
    return;
  }

  lista.innerHTML = `<p>${nome}, ${eta}, ${professione}</p>`;
};



function creaUtente(categoria) {
  categoria = categoria.toLowerCase();

  switch (categoria) {
    case "studente":
      console.log("studente");
      utente.push("studente");
      break;
    case "developer":
      console.log("developer");
      utente.push("developer");
      break;
    case "designer":
      console.log("designer");
      utente.push("designer");
      break;
    default:
      console.log("altro");
      utente.push("altro");
  }
}
