// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === boolean2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(phrase) {
  // // let splitPoints = 0;
  // let sentenceArr = [];

  // for (index in phrase) {
  //   if (phrase[index] === " ") {
  //     sentenceArr.push(phrase.slice(splitPoints,index));
  //     splitPoints = index;
  //   }
  //   if (index === phrase.length - 1) {
  //     sentenceArr.push(phrase.slice(splitPoints,index));
  //   }
  // }
  // return (sentenceArr);
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length-1] + ", " +arrayStrings[0] + ".";
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


