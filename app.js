console.log(`\nTask 1:\n`);

let myForEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
};

const arrEx1 = [1, 2, 3, 4, 5, 6, 7];

myForEach(arrEx1, (n, i, a) => {
    let newVal = Math.pow(n, i);
    console.log('Value: ' + n + ', index: ' + i + `, value in the power of its index: ` + newVal); //Example
});

console.log(`\nTask 2:\n`);

let myMap = function(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(callback(array[i], i, array));
    }
    return newArr;
};

const arrEx2 = [7, 6, 5, 4, 3, 2, 1];

const checkArray = myMap(arrEx2, (n, i, a) => n * 10);

console.log(`Original array: ` + `[` + arrEx2 + `]`);
console.log(`New array: ` + `[` + checkArray + `]`);