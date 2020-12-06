const fs = require('fs')

let entriesArr = fs.readFileSync("./data.txt", "utf8").split("\n");
console.log(entriesArr)
// Convert the strings to integers
entriesArr = entriesArr.map(entry => parseInt(entry));

console.log(entriesArr)

const target = 2020;

// ***** SOLUTION 1 *****
// The 'problem' with this solution is the usage of global variables

// Find two numbers that sum to 2020
let int1, int2;

entriesArr.forEach(valueX => {
    entriesArr.forEach(valueY => {
        if (valueX !== valueY && (valueX + valueY) === target) {
            int1 = valueX;
            int2 = valueY;
        }
    })
});

// Multiply those two numbers
console.log(int1 * int2);

// ***** SOLUTION 2 *****
// This method gives two times the same result because of iteration and search in two ways

// Multiply those two numbers that sum to 2020
(function() {
    entriesArr.forEach(valueX => {
        entriesArr.forEach(valueY => {
            if (valueX !== valueY && (valueX + valueY) === target) {
                console.log(valueX * valueY);
            }
        })
    });
})();

// ***** SOLUTION 3 *****

let result = entriesArr.map(function(val1) {
    entriesArr.map(function(val2) {
        if (val1 !== val2 && (val1 + val2) === target) {
            console.log(val1 * val2);
        }
    })
})