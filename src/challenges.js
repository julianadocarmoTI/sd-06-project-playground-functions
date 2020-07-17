// Desafio 1
function compareTrue(logico1, logico2) {
  let resposta = false;
  if (logico1 && logico2) {
    resposta = true;
  }
  return resposta;
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(meuArray) {
  let primeiraPalavra = meuArray[0];
  let ultimaPalavra = meuArray[meuArray.length - 1];
  let resposta = '';
  resposta += (ultimaPalavra + ', ' + primeiraPalavra);
  return resposta;
}

// Desafio 5
function footballPoints(wins, lies) {
  let vitorias = wins * 3;
  let empates = lies * 1
  return vitorias + empates;
}

// Desafio 6
function highestCount(meuArray) {
  let maior = Math.max.apply(null, meuArray);
  let contMaior = 0;
  for (let i = 0; i < meuArray.length; i += 1) {
    if (meuArray[i] === maior) {
      contMaior += 1
    }
  }
  return contMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = 0;
  let distanciaGato2 = 0;
  let resposta = '';
  // acertando os operadores
  if (mouse > cat1) {
    distanciaGato1 = mouse - cat1;
  } else {
    distanciaGato1 = cat1 - mouse
  }
  if (mouse > cat2) {
    distanciaGato2 = mouse - cat2;
  } else {
    distanciaGato2 = cat2 - mouse;
  }
  // verificando quem ta mais perto
  if (distanciaGato1 < distanciaGato2) {
    resposta = 'cat1';
  } else if (distanciaGato2 < distanciaGato1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  //retorno
  return resposta;
}

// Desafio 8
function fizzBuzz(meuArray) {
  let resposta = [];
  for (let i = 0; i < meuArray.length; i++) {
    if ((meuArray[i] % 3 === 0) && (meuArray[i] % 5 !== 0)) {
      resposta.push('fizz');
    } else if ((meuArray[i] % 3 !== 0) && (meuArray[i] % 5 === 0)) {
      resposta.push('buzz');
    } else if ((meuArray[i] % 3 === 0) && (meuArray[i] % 5 === 0)) {
      resposta.push('fizzbuzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(minhaString) {
  let resposta = minhaString.replace('a', '1').replace('e', '2').replace('i', '3').replace('o','4').replace('u', '5');
  return resposta;
}
function decode() {
  let resposta = minhaString.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u');
  return resposta;
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
