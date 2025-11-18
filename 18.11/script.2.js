const tuttiGliA = document.querySelectorAll("a");
console.log(tuttiGliA);

const tuttiParagrafi = document.querySelectorAll("p");
console.log(tuttiParagrafi.length);

const tuttiDataId = document.querySelectorAll("[data-id]");
console.log(tuttiDataId);

const tuttiCancelletto = document.querySelectorAll("a[href='#']");
console.log(tuttiCancelletto);

// const contenuto = document.querySelector("#contenuto");
// console.log(contenuto);
// //trovare genitore
// const genitore = contenuto.parentElement;
// console.log(contenuto.parentElement);
// //trovare figlio
// const contenuto = document.querySelector("#contenuto");
// console.log(contenuto.parentSibling);

// //trovare fratello
// const contenuto = document.querySelector("#contenuto");
// console.log();

//trovare genitore
const genitore = document.querySelector("#contenuto");
console.log("Genitore:", genitore.parentElement);
//trovare figlio
const figlio = document.querySelector("#contenuto");
console.log("Figlio:", figlio.children);
//trovare fratello
const fratello = document.querySelector("#contenuto");
console.log("Fratello:", fratello.nextElementSibling);
