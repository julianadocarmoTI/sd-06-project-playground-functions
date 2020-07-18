// Desafio 1 o
function compareTrue(a, b) {
  if (a === true && b === true) {
    return (true);
  }
  return (false);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return (sentence.split(' '));
}

// Desafio 4
function concatName(words) {
  return (words[0] + ', ' + words[words.length - 1]);
}

// Desafio 5
function footballPoints(wins, tries) {
  return ((wins * 3) + tries)
}

// Desafio 6
function highestCount(nbrs) {
  let max = nbrs[0];
  let count = 0;
  for (let index = 0; index < nbrs.length; index += 1) {
    if (nbrs[index] > max) {
      max = nbrs[index];
      count = 1;
    } else if (nbrs[index] === max) {
      count += 1;
    }
  }
  return (count)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mC2 = Math.abs(mouse - cat2);
  let mC1 = Math.abs(mouse - cat1);

  if (mC1 > mC2) {
    return cat2;
  } else if (mC2 > mC1) {
    return cat1;
  }
  return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  function checkNumber(n) {
    let fiveDivisionResult = n % 5;
    let threeDivisionResult = n % 3;
    if (threeDivisionResult === 0 && fiveDivisionResult === 0) {
      result.push('fizzBuzz');
    } else if (threeModulo === 0) {
      result.push('fizz');
    } else if (fiveModulo === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  arr.forEach(checkNumber);
  return result;
}

// Desafio 9
function encode(toEncode) {
  let encoded = [];
  for (let index = 0; index < toEncode.length; index += 1) {
    switch(toEncode[index]) {
      case 'a':
        encoded = encoded + '1';
        break;
      case 'e':
        encoded = encoded + '2';
        break;
      case 'i':
        encoded = encoded + '3';
        break;
      case 'o':
        encoded = encoded + '4';
        break;
      case 'u':
        encoded = encoded + '5';
        break;
      case toEncode[index]:
        encoded = encoded + toEncode[index];
    }
  }
  return encoded;
}
function decode(s) {
  s = (s.replace(/a/gi, '1'));
  s = (s.replace(/e/gi, '2'));
  s = (s.replace(/i/gi, '3'));
  s = (s.replace(/o/gi, '4'));
  s = (s.replace(/u/gi, '5'));
  return s;
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
