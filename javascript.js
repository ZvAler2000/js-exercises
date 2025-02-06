let string = "Zvone";
let number = 420;
let res = string + number;
console.log(`Hello, ${res}!`);

// let func = (a, b) => a + b;

// function text(input) {
//     return "Hello, " + input + "!";
// }

// console.log(text(func(string, number)));

let input = parseInt(prompt("Please input a number: "));

// for(let i = 1; i <= input; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizzbuzz");
//     }else if(i % 3 == 0) {
//         console.log("Fizz");
//     }else if(i % 5 == 0) {
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }

// for(let i = 1; i <= input; i++) {
//     switch(true){
//         case i % 3 === 0:
//             console.log("Fizz");
//             break;
//         case i % 5 === 0:
//             console.log("Buzz");
//             break;
//         case i % 3 === 0 && i % 5 === 0:
//             console.log("Fizzbuzz");
//             break;
//         default:
//             console.log(i);
//     }
// }

for(let i = 1; i <= input; i++) {
    console.log(Fizzbuzz(i));
}

function Fizzbuzz(num) {
    let output = num;
    switch(true){
        case num % 3 == 0 && num % 5 == 0:
            output = "Fizzbuzz";
            break;
        case num % 3 == 0:
            output = "Fizz";
            break;
        case num % 5 == 0:
            output = "Buzz";
            break;
        default:
            output = num;
    }
    return output;
}
