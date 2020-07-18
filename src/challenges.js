// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let result = false;
  if(a===true && b===true){
    result = true;
  }else{
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
  return area;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let save = "";
  for(let cont=0;cont<string.length;cont++){
    if(string[cont]===" " || cont==string.length-1){
      if(cont==string.length-1){
        save += string[cont];
        array.push(save);
        save = "";
      }else {
        array.push(save);
        save = "";
      }
    }
    else{
      save += string[cont];
    }
  }
  return array;
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = "";
  let ending = "";
  let begin = "";
  for(let i in array){
    if(i==0){
      ending = array[i];
    }else if(i==array.length-1){
      begin = array[i];
    }
  }
  string = begin;
  string += ", "+ending;
  return string;

}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
  // seu código aqui
}
console.log(footballPoints(5,1));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let n = 1;
  let numero = 1;
    for (let i in array){
        if(array[i]>array[n]){
            n = i;
            numero = array[i];
        }else if (array[i]===array[n]){
          n = i;
          numero = array[i];
        }
    }
    n = 0;
    for (let i in array){
      if(array[i]===numero){
        n++;
      }
    }
    return n;
}

console.log(highestCount([0,0,0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist_m_c1 = mouse - cat1;
  let dist_m_c2 = mouse - cat2;
  let result = "";
  if (dist_m_c1+dist_m_c2==0){
    result = "os gatos trombam e o rato foge";
  }else {
  if ( dist_m_c1>dist_m_c2){
    result = "cat1"
  } else if (dist_m_c1===dist_m_c2){
    result = "os gatos trombam e o rato foge";
  } else {
    result = "cat2"
  }
  }
  return result;
}
console.log(catAndMouse(1,0,2));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for(let i in array){
    if (array[i]%3===0 && array[i]%5===0){
        result.push("fizzBuzz");
      }else if(array[i]%3===0) {
        result.push("fizz");
      }else if(array[i]%5===0){
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let result = string.replace(/a/g,1);
  result = result.replace(/e/g,2);
  result = result.replace(/i/g,3);
  result = result.replace(/o/g,4);
  result = result.replace(/u/g,5);
  return result;
}
console.log(encode("hi there!"));

function decode(string) {
  // seu código aqui
  let result = string.replace(/1/g,"a");
  result = result.replace(/2/g,"e");
  result = result.replace(/3/g,"i");
  result = result.replace(/4/g,"o");
  result = result.replace(/5/g,"u");
  return result;
}
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(array, string) {
  // seu código aqui
  
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let string = "";
  let n = 0; //numero de numeros na array
  let m1 = 0; //marcar se tem repetido
  //let m2 = array[0]; //recebe o repetido
  let t = false;
  //anda pela array
  for (let i in array){
    m1=0;
  //necessario para fazer comparacao do i com j
    for(let j in array){
  //faz as comparacoes p/ caso encontre repetido, tem exclusoes p comparar com ele msm e p/ numeros anteriores
      if(array[i]===array[j]){
        //if(m2!=array[i]){
         // m2 = array[i];
          m1++;
        //}else {
         // m1++;
        //}
      } 
    }
  if(array[i]<0 || array[i]>9 || m1>=3){
    string = "não é possível gerar um número de telefone com esses valores";
    t = true;
  }
    n++;
  }
  if (t==true){
    string = "não é possível gerar um número de telefone com esses valores";
  }else if(n!=11){
    string = "Array com tamanho incorreto.";
  }else {
    string ="(";
    for(let cont=0;cont<2;cont++){
      string += array[cont];
    }
    string += ") "
    for(let cont=2;cont<6;cont++){
      string += array[cont];
    }
    string += "-";
    for(let cont=6;cont<11;cont++){
      string += array[cont];
    }
  }
  return string;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = false;
  if(lineA>lineB+lineC){
    result = false;
  }else if(lineB>lineA+lineC){
    result = false;
  }else if (lineC>lineA+lineB){
    result = false;
  }else {
    result = true;
  }
  return result;
}
console.log(triangleCheck(10,14,8));

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
