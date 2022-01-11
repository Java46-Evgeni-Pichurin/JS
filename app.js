// Task 1
console.log("Task 1:");

console.log("a" + ("a" - "s") + "a" + "s");

// Task 2
console.log("Task 2:");

function calculate(num1, num2, option){
    let result = "Wrong option!";
    switch(option){
        case 1: result = num1 * num2;
        break;
        case 2: 
        if (num2 !== 0) result = num1 / num2; 
        break;
        case 3: result = num1 + num2; 
        break;
        case 4: result = num1 - num2; 
        break;
    }
    return result;
}
let A = calculate(4,1,10); //Example
console.log(A);

// Task 3
console.log("Task 3:");

function fun(x) {
    function inFun(y, z) {
      return x * (y ** z);
    }
    return inFun;
}

let mainFunction = fun(5);
const result = fun(5)(10, 3); 

console.log(result);