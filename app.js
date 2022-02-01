/*********************************** Task 1 ***************************************/
console.log(`\nTask 1:\n`);

function Deferred(){
  this.res;
  this.arr = [];
}
Deferred.prototype.then = function(el) {
  this.arr.push(el);
}
Deferred.prototype.resolve = function(value) {
  this.res = value;
  for (let i = 0; i < this.arr.length; i++) {
      this.res = this.arr[i](this.res);
  }
}

const d = new Deferred();
d.then(function(res){ console.log('1 ', res); return 'a'; });
d.then(function(res){ console.log('2 ', res); return 'b'; });
d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');

/*********************************** Task 2 ***************************************/
console.log(`\nTask 2:\n`)

function MyArray(n){
  this.arr = [];
  this.defaultValue = n;
}
// Fill empty elements of array with default value
MyArray.prototype.fillEmpty = function(){ 
  for (let i = 0; i < this.arr.length; i++) {
    this.arr[i] === undefined ? this.arr[i] = this.defaultValue : this.arr[i]
  }
}
// Check if parameter "inedex" is bigger than length of array. If yes, sets new length of the array.
MyArray.prototype.checkIndex = function(index){ 
  index > this.arr.length ? this.arr.length += index - this.arr.length + 1 : this.arr.length;
}
MyArray.prototype.get = function(index) {
  this.checkIndex(index);
  this.fillEmpty();
  return this.arr[index];
}
MyArray.prototype.set = function(index, value) {
  this.checkIndex(index);
  this.arr[index] = value;
  this.fillEmpty();
}
MyArray.prototype.setValue = function(value) {
  for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = value;
  }
}
MyArray.prototype.toString = function() {
  return JSON.stringify(this.arr);
}

const myArray = new MyArray(7);

console.log(`Array[10] = ${myArray.get(10)}`) // displayed out 7
myArray.set(5, 66)//sets 66 at index 5
console.log(myArray.toString());

console.log(`Array[5] = ${myArray.get(5)}`) //displayed out 66
myArray.setValue(300);
console.log(myArray.toString());

console.log(`Array[8] = ${myArray.get(8)}`) //displayed out 300
myArray.setValue(1);
console.log(`Array[0] = ${myArray.get(0)}`) //displayed out 1
myArray.set(15, 99)
console.log(myArray.toString());