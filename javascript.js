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

function isEven(input) {
    if(input % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const fbArray = array.map(Fizzbuzz);
const filterArray = array.filter(isEven);
const thirdArray = array.filter((input) => input % 3 == 0);
const reduceArray = array.reduce((initialValue, currentItem) => { return initialValue - currentItem; }, 0);
let variable = 1;

console.log(fbArray);
console.log(filterArray);
console.log(thirdArray);
console.log(reduceArray);
for(let i = 2; i < 16; i++) {
    variable -= i;
}
console.log("Variable:" + variable);

// let sum = 0;
// const s3eMapArray = array.map((input) => {
//     if(input % 2 == 0) {
//         sum += input * 3;
//     }
// });
// console.log("Map: " + sum);

// let fsum = 0;
// const s3eFilterArray = array.filter((input) => {
//     if(isEven(input)) {
//         fsum += input * 3;
//     }
// });
// console.log("Filter: " + fsum);

// const s3eReduceArray = array.reduce((total, currentItem) => {
//     if(currentItem % 2 == 0) {
//         console.log("BRUH");
//         return total + (currentItem * 3);
//     }
//     console.log("yikes!");
// }, 0);

// console.log("Reduce: " + s3eReduceArray);

function sumOfTripledEvens(array) {
    return array
        .filter((input) => input % 2 === 0)
        .map((input) => input * 3)
        .reduce((tot, curr) => tot + curr);
}

console.log(sumOfTripledEvens(array));