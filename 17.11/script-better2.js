// function calcolo(tipo) {
//   const n1 = Number(document.getElementById("n1").value);
//   const n2 = Number(document.getElementById("n2").value);

//   let risultato;

//   if (tipo === "somma") {
//     risultato = n1 + n2;
//   } else if (tipo === "sottrazione") {
//     risultato = n1 - n2;
//   } else if (tipo === "divisione") {
//     risultato = n1 / n2;
//   } else if (tipo === "moltiplicazione") {
//     risultato = n1 * n2;
//   }

//   document.getElementById("Risultato").textContent =
//     "Il risultato è " + risultato;
// }

function calcolo(operazione) {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  let risultato;

  switch (operazione) {
    case "somma":
      risultato = n1 + n2;
      break;
    case "sottrazione":
      risultato = n1 - n2;
      break;
    case "divisione":
      risultato = n1 / n2;
      break;
    case "moltiplicazione":
      risultato = n1 * n2;
      break;
    default:
      risultato = "Operazione non valida";
  }
  document.getElementById("Risultato").textContent =
    "Il risultato è " + risultato;
}
