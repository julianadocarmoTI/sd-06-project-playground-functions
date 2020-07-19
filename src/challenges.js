// Desafio 1
function compareTrue(string1, string2) {
  if (string1 === true && string2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separado = string.split(' ');
  return separado;
}
// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let ultmoPrimeiro = `${ultimo}, ${primeiro}`;
  return ultmoPrimeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  let point = (wins * 3) + ties;
  return point;
}
// Desafio 6
function highestCount(array) {
  let numeroMaior = 0;
  let count = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] > numeroMaior) {
      numeroMaior = array[i];
      count = 0;
    }
    if (array[i] === numeroMaior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  // let result = null;
  if (distanciaGato1 > distanciaGato2) {
    return 'cat1';
  } else if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
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
