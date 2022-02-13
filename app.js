/******************************************Task 1******************************************/
console.log(`\nTask 1\n`);

function getRandomNumber(min, max) {
min > max ? max = [min, min = max][0] : true;
max = Math.floor(max) + 1;        
min = Math.ceil(min);
return Math.floor(Math.random() * (max - min)) + min;
}
/**************************************Task 1 - test***************************************/
const randArr = [];
for (let i = 0; i < 5; i++) {
        randArr.push(getRandomNumber(5,0));
}
console.log(`Array with random numbers from 0 to 5: `, randArr);

/******************************************Task 2******************************************/
console.log(`\nTask 2\n`);

function concatinate(prefix) {
const string = "" + prefix;
return newString => string + newString ;
}
/**************************************Task 2 - test***************************************/
const concatApp = concatinate('App-');
const concatMessage = concatApp('Test status: Done');
console.log(`Test cancatination of strings => ${concatMessage}`);

const firstString = concatinate(`Hello `);
const secondString = firstString(`World`);
console.log(`Test cancatination of strings => ${secondString}`);