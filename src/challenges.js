// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splitSentence = [];
  let splitWord = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      splitSentence.push(splitWord);
      splitWord = '';
    } else {
      splitWord += string[i];
    }
  }

  splitSentence.push(splitWord);

  return splitSentence;
}

// Desafio 4
function concatName() {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let max = Number.MIN_VALUE;
  let occurrences = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (max === numbers[i]) {
      occurrences += 1;
    }
  }
  
  return occurrences;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 > cat2) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(fizzBuzzNumbers) {
  const fizzBuzzArray = [];

  for (let i = 0; i < fizzBuzzNumbers.length; i++) {
    if (fizzBuzzNumbers[i] % 3 === 0 && fizzBuzzNumbers[i] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (fizzBuzzNumbers[i] % 5 === 0 && fizzBuzzNumbers[i] % 3 !== 0) {
      fizzBuzzArray.push('buzz');
    } else if (fizzBuzzNumbers[i] % 3 === 0 && fizzBuzzNumbers[i] % 5 !== 0) {
      fizzBuzzArray.push('fizz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }

  return fizzBuzzArray;
}

// Desafio 9
function encode(decodedString) {
  let encoded = '';

  for (let i = 0; i < decodedString.length; i++) {
    if (decodedString[i] === 'a') {
      encoded += '1';
    } else if (decodedString[i] === 'e') {
      encoded += '2';
    } else if (decodedString[i] === 'i') {
      encoded += '3';
    } else if (decodedString[i] === 'o') {
      encoded += '4';
    } else if (decodedString[i] === 'u') {
      encoded += '5';
    } else {
      encoded += decodedString[i];
    }
  }

  return encoded;
}

function decode(encodedString) {
  let decoded = '';

  for (let i = 0; i < encodedString.length; i++) {
    if (encodedString[i] === '1') {
      decoded += 'a';
    } else if (encodedString[i] === '2') {
      decoded += 'e';
    } else if (encodedString[i] === '3') {
      decoded += 'i';
    } else if (encodedString[i] === '4') {
      decoded += 'o';
    } else if (encodedString[i] === '5') {
      decoded += 'u';
    } else {
      decoded += encodedString[i];
    }
  }

  return decoded;
}

// Desafio 10
function techList(techlist, name) {
  const objectList = [];

  for (let i = 0; i < techlist.length; i += 1) {
    const tech = techlist[i];
    objectList.push({tech, name});
  }

  return objectList;
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
