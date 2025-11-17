let utenti = [];

document.getElementById("btnAggiungi").onclick = function () {
  const nome = document.getElementById("nome").value.trim();
  const eta = document.getElementById("eta").value;
  const professione = document.getElementById("professione").value.trim();
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

  const utente = creaUtente(nome, eta, professione);
  utenti.push(utente);
  console.log(utenti);
};

function creaUtente(nome, eta, professione = "non specificata") {
  console.log("📝 Creazione nuovo utente...");
  let categoria;
  switch (professione.toLowerCase()) {
    case "studente":
      categoria = "studente";
      break;
    case "developer":
    case "programmatore":
    case "sviluppatore":
      categoria = "developer";
      break;
    case "designer":
    case "grafico":
      categoria = "designer";
      break;
    default:
      categoria = "altro";
  }

  return {
    nome: nome,
    eta: eta,
    professione: professione,
    categoria: categoria,
  };
}
