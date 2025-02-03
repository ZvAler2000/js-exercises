let string = "Zvone";
let number = 420;
let res = string + number;
console.log(`Hello, ${res}!`);

let func = (a, b) => a + b;

function text(input) {
    return "Hello, " + input + "!";
}

console.log(text(func(string, number)));