function encode (num, codingString) {
    let counter = 1;
        for (let i = 0; i < codingString.length - 1; i++) {
            if (codingString[i] === codingString[i + 1]){
                return console.log("codingString contains repeated symbols. Please choose another codingString.");
            }
            counter++;
        }   
    let res="";
        do {
            const digit = Math.trunc(num % counter);
            const symb = getSymbol(digit, codingString);
            res = symb + res;
            num = Math.trunc(num / counter);
        } while(num >= 1);
    return res;
}

function getSymbol(digit, codingString) {
    return "" + codingString[digit];
}

console.log(encode(5464, "%Example*")); 