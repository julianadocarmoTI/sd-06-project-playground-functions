// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b === true) {
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}
console.log(calcArea(15,28))

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}
console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array.length-1;
  return  array[last]+', '+array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let vit = 3 * wins;
  let emp = ties;
  return vit + emp;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNum = 0;
  let time = 0;
  for (let i in array) {
    if (array[maiorNum] < array[i]) {
      maiorNum = i;
    }
  };
  for (let c in array) {
    if(array[c] === array[maiorNum]){
      time++;
    }
  }
  return time;
} 


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(cat1 === cat2 && cat2 === mouse) {
    return "os gatos trombam e o rato foge"
  } else if (cat1 < cat2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novo = [];
  for(let i = 0; i < array.length; i++){
      if(array[i]%3 === 0 && array[i]%5 === 0){
        novo.push("fizzbuzz");
      } else if(array[i]%5 === 0) {
        novo.push("buzz");
      } else if(array[i]%3 === 0 && array[i]%5 === 1) {
        novo.push("fizz");
      } else {
        novo.push("bug!");
      }
    }
    return novo;
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
