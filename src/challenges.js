let q1x = true;
let q1y = true;
// Desafio 1
function compareTrue(q1x, q1y) {
  if (q1x && q1y === true) {
    return true;
  } else {
    return false;
  }
}

let base = 2;
let height = 4;
// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}
// Desafio 3
function splitSentence(string) {
  let frase = string.split(" ");
  return frase;
}
// Desafio 4
function concatName(array) {
  let plv = array[array.length - 1] + ", " + array[0];
  return plv;

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
