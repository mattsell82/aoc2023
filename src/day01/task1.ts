import { parseTextFile } from "../parser";

let rows = parseTextFile("./day01/input1.txt")
console.log("rows: " + rows.length);

const values = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

var count = 0;
var sum = 0;

rows.forEach(row => {
    count++;
    let firstInt = findFirstInteger(row);
    let lastInt = findLastInteger(row);

    let rowResultString = `${firstInt ?? 'N/A'}${lastInt ?? 'N/A'}`;
    let rowResultInt = parseInt(rowResultString);

    if (!isNaN(rowResultInt)) {
        sum += rowResultInt
    }
    else {
        console.log("fel: " + count)
    }

});

console.log("task1 result: " + sum);

function findFirstInteger(inputString: string): string | null {
    for (const char of inputString) {
        if (values.has(char)) {
            return char;
        }
    }

    return null;
}

export function findLastInteger(inputString: string): string | null {
    for (let i = inputString.length - 1; i >= 0; i--) {
        const char = inputString[i];
        if (values.has(char)) {
            return char;
        }
    }

    return null;
}