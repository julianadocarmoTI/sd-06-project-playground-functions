// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let acumulador = '';
  let novaLista = [];
  for (let indice in frase) {
    let elemento = frase[indice]
    if (elemento !== ' ') {
      acumulador += elemento;
    } else {
      novaLista.push(acumulador);
      acumulador = '';
    }
  }
  novaLista.push(acumulador)
  return novaLista;
}

// Desafio 4
function concatName(listaNomes) {
  // seu código aqui
  let ultimoNome = listaNomes.slice().pop();
  let primeiroNome = listaNomes.slice().shift();

  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties);

  return points;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorValor = arrayNumeros[0];
  let ocorrencias = 0;

  for (let i in arrayNumeros) {
    if (arrayNumeros[i] > maiorValor) {
      maiorValor = arrayNumeros[i];
    }
  }

  for (let i in arrayNumeros) {
    if (arrayNumeros[i] === maiorValor) {
      ocorrencias += 1;
    }
  }
  return ocorrencias;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let mousePos = mouse;
  let cat1Pos = cat1;
  let cat2Pos = cat2;
  let distMouseCat1 = Math.abs(mousePos - cat1Pos);
  let distMouseCat2 = Math.abs(mousePos - cat2Pos);

  if (distMouseCat1 === distMouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  }
  if (distMouseCat2 < distMouseCat1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let novaArray = [];
  for (let i in arrayNumeros) {
    let numero = arrayNumeros[i];
    if (numero % 3 === 0 && numero % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (numero % 3 === 0) {
      novaArray.push('fizz');
    } else if (numero % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function swapVogals(letter) {
  switch (letter) {
    case 'a':
      return 1;
      break;
    case 'e':
      return 2;
      break;
    case 'i':
      return 3;
      break;
    case 'o':
      return 4;
      break;
    case 'u':
      return 5;
      break;
    default:
      return letter;
      break;
  }
}

function swapNumbers(letter) {
  switch (letter) {
    case '1':
      return "a";
      break;
    case '2':
      return "e";
      break;
    case '3':
      return "i";
      break;
    case '4':
      return "o";
      break;
    case '5':
      return "u";
      break;
    default:
      return letter;
      break;
  }
}

function encode(frase) {
  // seu código aqui
  let novaFrase = [];
  for (let i in frase) {
    let letra = frase[i];
    let conversao = swapVogals(letra);
    novaFrase.push(conversao);
  }
  return novaFrase.join('');
}

function decode(frase) {
  // seu código aqui
  let novaFrase = [];
  for (let i in frase) {
    let letra = frase[i];
    let conversao = swapNumbers(letra);
    novaFrase.push(conversao);
  }
  return novaFrase.join('');
}

// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  if (tecnologias.length == 0) {
    return 'Vazio!';
  }
  tecnologias.sort();
  let novaLista = [];
  for (let i in tecnologias) {
    let objeto = {
      tech: tecnologias[i],
      name: name,
    };
    novaLista.push(objeto);
  }
  return novaLista;
}

// Desafio 11
function verificaTamanhoArray(lista) {
  let tamanhoValido = lista.length == 11;
  return tamanhoValido; 
}

function verificaNumerosInvalidos(lista) {
  let valorInvalido = false;
  for (let i in lista) {
    let elemento = lista[i];
    if (elemento < 0 || elemento > 9) {
      valorInvalido = true;
    }
  }
  return valorInvalido;
}

function verificaExcessoOcorrencias(lista) {
  let maxOcorrencias = 3;
  for (let indice in lista) {
    let ocorrencias = 0;
    for (let indiceAux in lista) {
      if (lista[indice] === lista[indiceAux]) {
        ocorrencias += 1;
        if (ocorrencias === maxOcorrencias) {
          return true
        }
      }
    }
  }
  return false;
}

function generatePhoneNumber(numeros) {
  // seu código aqui
  // Verifica se tamanho do array é diferente de 11
  let tamanhoValido = verificaTamanhoArray(numeros);
  if (!tamanhoValido) {
    return 'Array com tamanho incorreto.';
  }

  // Verifica número menor que 0 ou maior que 9
  let valorInvalido = verificaNumerosInvalidos(numeros);
  if (valorInvalido) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  // Verifica a ocorrência de 3 números iguais
  let excessoRepeticoes = verificaExcessoOcorrencias(numeros);
  if (excessoRepeticoes) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  // Criação do número
  let ddd = numeros.slice(0, 2).join('');
  let prefixo = numeros.slice(2, 7).join('');
  let sufixo = numeros.slice(7).join('');
  let numeroPronto = `(${ddd}) ${prefixo}-${sufixo}`;
  return numeroPronto;
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
