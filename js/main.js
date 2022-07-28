console.log(document.querySelector("title").innerText);

const listaAlum1 = document.querySelectorAll("dl.lista_card > dd");
const listaAlum2 = document.querySelectorAll("dl.lista__card > dd");
console.log(listaAlum1, listaAlum2);

function nombreCompleto(alumno) {
  let nombreS = [];
  for (let i = 0; i < alumno.length; i++) {
    if (alumno.innerText == []) {
      console.log("");
    } else {
      nombreS = nombreS + alumno[i].innerText + " ";
    }
  }
  return nombreS;
}

let alumno1 = nombreCompleto(listaAlum1);
let alumno2 = nombreCompleto(listaAlum2);
// console.log(alumno1, alumno2);

console.log(
  '----- \nIntegrante 1: "' +
    alumno1 +
    '"\nIntegrante 2: "' +
    alumno2 +
    '"\n-----'
);
