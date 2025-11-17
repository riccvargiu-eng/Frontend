function sum() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let somma = n1 + n2;
  document.getElementById("risultato").textContent = "Risultato: " + somma;
}

function subtracion() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let somma = n1 - n2;
  document.getElementById("risultato").textContent = "Risultato: " + somma;
}

function division() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let somma = n1 / n2;
  document.getElementById("risultato").textContent = "Risultato: " + somma;
}

function multiplication() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let somma = n1 * n2;
  document.getElementById("risultato").textContent = "Risultato: " + somma;
}
