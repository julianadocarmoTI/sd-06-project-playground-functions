// Desafio 1 - testando um commit

function compareTrue( a, b) {
  if ((a === true) &&  (b === true)) {
     return  true;
  } else {
     return  false;
  }
}
let a = false;
let b = true;
let resultado = compareTrue(a, b);
console.log(resultado);

// Desafio 2
// Área do triângulo

function calcArea(base, altura) {
   return ((base * altura) / 2);
}
 area = calcArea(15, 4);
 console.log(area);

// Desafio 3
/* Dividindo a frase
Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe']. */

function splitSentence() {
   let verifica = nome.split(" ");
   return (verifica);
}
 let nome = "Go Trybe";
 let resultSplit = splitSentence(nome);
 console.log(resultSplit);

// Desafio 4
function concatName() {
  // seu código aqui
}

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
