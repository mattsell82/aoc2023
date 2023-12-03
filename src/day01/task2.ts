import { parseTextFile } from "../parser";

//758 kraschar. behöver hitta alla förekomster av substringen.

let rows = parseTextFile("./day01/input1.txt")
console.log("rows: " + rows.length);

const numericValues: string[] = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const textValues: string[] = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

var count = 0;
var sum = 0;

rows.forEach(row => {
    count++;
    console.log("---------" + count)
    console.log(row);

    let rowResult = findValues(row);
    sum += rowResult;
});

console.log("sum task2: " + sum);

function findValues(inputString: string): number {

    type KeyValuePair = [number, number];
    let indexList: KeyValuePair[] = []; 

    for (let index = 0; index < numericValues.length; index++) {
        const substring = numericValues[index];

        const regex = new RegExp(substring, 'g');
        let match;
        const occurrences: number[] = [];
      
        while ((match = regex.exec(inputString)) !== null) {
          // match.index contains the starting index of the occurrence
          indexList.push([match.index, index]);
        }

    }

    for (let index = 0; index < textValues.length; index++) {
        const substring = textValues[index];

        const regex = new RegExp(substring, 'g');
        let match;
        const occurrences: number[] = [];
      
        while ((match = regex.exec(inputString)) !== null) {
          // match.index contains the starting index of the occurrence
          indexList.push([match.index, index]);
        }
    }

    indexList.sort((a, b) => a[0] - b[0]);

    console.log(indexList);

    const firstValue = indexList[0][1].toString();
    const lastValue = indexList[indexList.length -1][1].toString();

    let rowResultString = `${firstValue ?? 'N/A'}${lastValue ?? 'N/A'}`;
    let rowResultInt = parseInt(rowResultString);

    if (!isNaN(rowResultInt)) {
        console.log(rowResultInt)
        return rowResultInt;
    }
    else {
        console.log("fel: " + count)
    }

    return 0;
}

