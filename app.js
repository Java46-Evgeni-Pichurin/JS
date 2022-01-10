console.log("Hello World");
// //Output for var: 3 3 3
// for (var i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// //Output for let: 0 1 2
// for (let i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
const fun = function(a,b) {
    return a + b;
}
let a = 5;
// console.log(a ** 2);
// console.log(fun(10,20));
// console.log(a(10,20)); // error
// console.log(fun ** 2); // NaN - Not a Number
console.log("12" + 12); // JS defines that operator + exists for strings, that's why number 12 will be converted to string
console.log("12" - 12); // JS defines that operator - doesn't exist for string, that's why string "12" will be converted to number
console.log("ab" - 12); // ...NaN
//sometimes there is a need to explicit converion from string to a number
//"+" unary is the simplest way for the explicit conversion of a string to a number
console.log("12" + 12);
console.log(`+"12" + 12 = ${+"12" + 12}`);
// HW #definition
// 1 - using only two letters "a", "s" print out word ananas case insensitive
// 2 - write function calculate that can perform any arithmetic operation on two numbers (*, /, +, -)
// 3 - write any example for running the following expression fun(5)(10, 3) 