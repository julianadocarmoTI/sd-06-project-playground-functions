// Desafio 1
let teste = false;
function compareTrue(boo1, boo2) {
  // seu código aqui
  if (boo1 === true && boo2 === true) {
    teste = true;
  }
  else {
    teste = false;
  }
  return teste;
}
console.log(compareTrue(true, false));

// Desafio 2
let areaDoTriangulo = 0;
function calcArea(base, alt) {
  // seu código aqui
  if (typeof base === 'number' && typeof alt === 'number' && base > 0 && alt > 0) {
    areaDoTriangulo = (base * alt) / 2;
  }
  else {
    console.log('erro: insira dois números positivos.');
  }
  return areaDoTriangulo;
}
console.log(calcArea(12,8));

// Desafio 3
let sentenceArray = [];
function splitSentence(string) {
  // seu código aqui
  if (typeof string === 'string') {
    sentenceArray = string.split(" ");
  }
  else {
    console.log('erro: parâmetro deve ser um texto.');
  }
  return sentenceArray;
}
console.log(splitSentence('go Trybe !'));

// Desafio 4
let arrayStrings = [];
function concatName(array) {
  // seu código aqui
  arrayStrings.push(array[array.length - 1]);
  arrayStrings.push(array[0]);
  return arrayStrings;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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
