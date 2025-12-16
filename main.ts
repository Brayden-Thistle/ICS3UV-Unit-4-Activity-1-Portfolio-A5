/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-15
 * @fileoverview this program prompts the user for a range of numbers and it displays the ASCII number beside it.
*/

//variables and declaring them
const startnumber = Number(prompt("Please enter a number larger than 32, but less than 126:"));

const endnumber = Number(prompt(`please enter a number larger than ${startnumber} and less than 126`))

//loop and output
for (let currentnumber = startnumber; currentnumber <= endnumber; currentnumber++) {
  console.log(`${currentnumber} = ${String.fromCharCode(currentnumber)}`);
}

console.log("\nDone");