// Desafio 1
function compareTrue(parametro1, parametro2) {
  let resultado = parametro1 && parametro2;
    return resultado;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;

return resultado;
}
console.log(calcArea(10, 20));

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
return resultado;
}
console.log(splitSentence( "vamos comer um sanduba"))

// Desafio 4
function concatName(arrayDeStrings) {
  var resultado = arrayDeStrings[arrayDeStrings.length -1]+ ", " + arrayDeStrings[0];
  return resultado;
}
console.log(concatName(["izelda","jose","maria"]));


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
