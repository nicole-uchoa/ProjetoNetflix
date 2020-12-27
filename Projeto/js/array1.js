//const div = document.querySelectorAll('div');
//const divArray = Array.from(div);

const salgados = ['coxinha', 'empada'];
const fruta = ['melancia', 'laranja', 'banana'];

//fruta.push('amora'); // pop remove no final
//console.log(fruta);

//fruta.unshift('limão');
//console.log(fruta); //shift remove no começo

const alimentos = fruta.concat(salgados);
//console.log(alimentos);

//console.log(fruta.slice(0, 1));

fruta.splice(2);
console.log(fruta);
//alimentos.splice(0, 0, 'kibe');
//console.log(alimentos);

//fruta.forEach((value, index) => console.log(index, value));

//console.log(fruta.map((value, index) => `${index} - ${fruta}`));

const arr = [10, 25, 37, 4, 10, 10];
arr.flat();
//console.log(arr.flat());

const arrIterator = arr.keys();
const arrIterator1 = arr.values();
const arrIterator2 = arr.entries();

console.log(arrIterator.next());
console.log(arrIterator1.next());
console.log(arrIterator1.next());

console.log(arrIterator2);
console.log(arrIterator2.next());

const encontrar = arr.find(value => value > 25);
const encontrar1 = arr.findIndex(value => value > 25);
console.log(encontrar);
console.log(encontrar1);

const novoArray = arr.filter(value => value > 10);
console.log(novoArray);

const primeiraOcorrencia = arr.indexOf(10);
const ultimaOcorrencia = arr.lastIndexOf(10);

console.log(primeiraOcorrencia);
console.log(ultimaOcorrencia);

const bool = arr.includes(1);
const bool1 = arr.includes(10);

console.log(bool);
console.log(bool1);

const condicaoTorF = arr.some(value => value % 2 === 0);
console.log(condicaoTorF);

const todosDentroCondicao = arr.every(value => value % 2 === 0);
console.log(todosDentroCondicao);

const ordenar = arr.sort((current, next) => current - next);
console.log(ordenar);

const reverter = arr.reverse();
console.log(reverter);

const retornaString = arr.join('-');
console.log(retornaString);

const retornaValor = arr.reduce((total, value) => total += value, 0);
console.log(retornaValor);