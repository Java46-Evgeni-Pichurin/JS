/*********************FUNCTIONS AND DATA FOR TASK 1 AND 2*******************************/ 

let myForEach = function(array, callback) {  
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}; // Common function for task 1 and 2

const arrEx1 = [1, 2, 3, 4, 5, 6, 7]; // Array for test task 1
const arrEx2 = [7, 6, 5, 10, 3, 12, 1]; // Array for test task 2

/**************************************TASK 1*******************************************/

console.log(`\nTask 1\n`);

let myFilter = function(array, callback){
  const res = [];
  function forEachCall(n, i, a) {
      if (callback(n, i, a) == true)
      res.push(n);
  }
  myForEach(array, forEachCall);
  return res;
}

const ar = myFilter(arrEx1, (n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1); //Test
const ar1 = myFilter(arrEx1, (n, _i, a) => Math.pow(n, 2) - a.length > 0); //Test
console.log(`Test for ar:`, ar);
console.log(`Test for ar1:`, ar1);

/**************************************TASK 2*******************************************/

console.log(`\nTask 2\n`);

let myReduce = function(array, callback, initialResult){
  let res;
  initialResult == undefined ? initialResult = array[0] : res = initialResult;
  function forEachCall(n, i, a) {
      res = callback(initialResult, n, i, a);
      initialResult = res;
  }
  myForEach(array, forEachCall);
  return res;
}
const max = myReduce(arrEx2, (max, cur)=>cur > max ? cur : max); //Test
let sum = myReduce(arrEx2, (sum, cur) => sum + cur, 0); //Test
console.log(`Test for max:`, max);
console.log(`Test for sum:`, sum);

/*********************FUNCTIONS AND DATA FOR TASK 3 AND 4*******************************/ 

function createAddress(city, street) {
  return {city, street}
}
function createPerson(id, name, address) {
  return {id, name, address};
}
const persons = [
  createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
  createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
  createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
  createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]
/**************************************TASK 3*******************************************/

console.log(`\nTask 3\n`);

function getPersonsCity(persons, city) {
  // Create new array of persons by chosen city only
  // First way
  const res = [];
  persons.forEach((p, i) => {
  if (persons[i].address.city === city)
  res.push(JSON.stringify(p))
  });
  // Second way
  // const res = persons.filter((_n, i, _a) => persons[i].address.city === city);
  return res;
}
const res1 = getPersonsCity(persons, "Rehovot"); //Test
const res2 = getPersonsCity(persons, "Lod"); //Test

console.log(res1);
console.log(`Test for res2:`, res2);

/**************************************TASK 4*******************************************/

console.log(`\nTask 4\n`);

function movePersonsNoCityAtBeginning(persons, city) {
  // Create and sort new array of persons by the city (persons with chosen city in the end)
  const res = [];
  persons.forEach((p, i) => {
  persons[i].address.city !== city ? res.unshift(JSON.stringify(p)) : res.push(JSON.stringify(p))
  });
  return res; 
}
const res3 = movePersonsNoCityAtBeginning(persons, "Rehovot"); //Test
const res4 = movePersonsNoCityAtBeginning(persons, "Lod"); //Test
console.log(`Test for res3:`, res3);
console.log(`Test for res4:`, res4);