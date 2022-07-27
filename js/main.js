console.log(document.querySelector("title").innerText);

const listaAlum = document.getElementById("lista").textContent;
console.log(listaAlum);

const [
  titulo1,
  campoPrimN1,
  primNombre1,
  campoSegN1,
  segNombre1,
  campoPrimA1,
  primApellido1,
  campoSegA1,
  segApellido1,
  titulo2,
  campoprimN2,
  primNombre2,
  campoSegN2,
  campoPrimA2,
  primApellido2,
  campoSegA2,
] = listaAlum;

console.log(
  listaAlum[0] +
    '1: "' +
    primNombre1 +
    " " +
    segNombre1 +
    " " +
    primApellido1 +
    " " +
    segApellido1 +
    '"'
);
