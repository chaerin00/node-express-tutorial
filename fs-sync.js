const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result.txt",
  `Here is the result: ${first}, ${second}\n`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");

// start
// done with this task
// starting the next one
