// script.js
const btn = document.getElementById("run");
const out = document.getElementById("output");

// Utility per mostrare il risultato di ogni esempio
function log(title, content) {
  out.textContent += `-- ${title} --\n`;
  out.textContent +=
    (typeof content === "string" ? content : JSON.stringify(content, null, 2)) +
    "\n\n";
}

btn.addEventListener("click", () => {
  out.textContent = "";
  // Qui inizieremo a incastrare gli esempi
});
