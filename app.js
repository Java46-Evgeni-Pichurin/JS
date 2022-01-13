/*Strings*/
const str1 ="abc";
const str2 = "abc";
console.log(`str1 == str2 is ${str1 == str2}`);
console.log(`"abc" < "ab" is ${"abc" < "ab"}`);
console.log(`"123" > 23 is ${"123" > 23}`);
console.log(`"123" > 23 is ${"123" > "23"}`);
// If logical expression cntains both string and number, JS will convert string to number
// If string doesn't contain a number a result of conversion will be NaN
// In any logical expression if there is NaN, then the result will be false
console.log(`"abc" > 23 is ${"abc" > 23}`);// false
console.log(`"abc" < 23 is ${"abc" < 23}`);// false
console.log(`"abc" != 23 is ${"abc" != 23}`);// true
/*********************************/
function stringProcessin(str) {
    const strP = "" + str;
    console.log(`"${str}"[4] is ${str[4]}`);
    console.log(`length of "${strP}" is ${strP.length}`);
    console.log(`"${strP}" includes "abc" is ${strP.includes("abc")}`);
    console.log(`substring of "${strP}" beginning from index 2 to index 5 is ${strP.substring(2, 5)}`);
    console.log(`index of substring "ll" in the "${strP}" is ${strP.indexOf("ll")}`);
    console.log(`last index of substring "ll" in the "${strP}" is ${strP.lastIndexOf("ll")}`);
}
stringProcessin("abcd*lmn*ll(oo&&ll");


/*********************************************************
write function:

function encode (num, codingString) {
    // codingString - any string with no repeated symbols
    // you should validate codingString doesn't contain repeated symbols
    // base = length of codingString
    // algorithm the same as specified above
    // getSymbol(digit, codingString) using operator [i]
}
 ********************************************************/

function encode(num, base) {
    // base from 2 to 10
    let res="";
    do {
        const digit = Math.trunc(num % base);
        const symb = getSymbol(digit);
        res = symb + res;
        num = Math.trunc(num / base);
    } while(num >= 1);
    return res;
}

function getSymbol(digit) {
    // if base from 2 to 10
    console.log(digit);
    return "" + digit; // it will work only with base <= 10
}

console.log(encode(10, 2));