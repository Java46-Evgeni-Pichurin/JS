/**************************************TASK 1*******************************************/

console.log(`\nTask 1:\n`);

function countOccurrences(array) {
  const res = {};
  array.reduce((_cur, n) => res[n] === undefined ? res[n] = 1 : res[n]++, 0);
  return res;
}

function displayOccurrences(array) {
  
  const res = countOccurrences(array);

  Object.entries(res).sort((e1, e2) =>
  e2[1] - e1[1] === 0 ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1]
  ).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}

const ar1 = ["Jon", "Kate", "Adam", "Kate", "Kate", "Nick", "Kate", "Nick", "Tom"
, "Nick", "Kate", "Nick", "Tom", "Nick", "Kate", "Nick", "Tom", "Nick", "Kate"
, "Nick", "Tom", "Nick", "Kate", "Nick", "Tom", "Adam", "Adam", "Adam", "Adam"];

const ar2 = ["ABCD", "ABCA", "ABCB", "ABCC"];

console.log(`Test ar1 with length = ${ar1.length}:`);
displayOccurrences(ar1);
console.log(`\nTest ar2 with length = ${ar2.length}:`);
displayOccurrences(ar2);

/**************************************TASK 2*******************************************/

console.log(`\nTask 2:\n`)

function countBy(array, callbackFun) {
  return countOccurrences(array.map((n, i, a) => callbackFun(n, i, a)));
}

const arr1 = [6.4, 7.3, 6.5, 6.9];
const statistics1 = countBy(arr1, element => Math.floor(element));
console.log(`Test arr1: ${JSON.stringify(arr1)} with Math.floor`);
console.log(statistics1,"\n"); //result: statistics1 -> {"6": 3, "7":1}

const arr2 = ['abcd', 'lmnr', 'ab', 'dddd'];
const statistics2 = countBy(arr2, element => element.length);
console.log(`Test arr2: ${JSON.stringify(arr2)} with lenght of each element`);
console.log(statistics2,"\n"); //result: statistics2 -> {"4": 3, "2":1}

const arr3 = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
{age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}];
const statistics3 = countBy(arr3, element => element.age);
console.log(`Test arr3: ${JSON.stringify(arr3)} with key: age`);
console.log(statistics3,"\n")//result statistics3 -> {"25":2, "50":1, "70":1}