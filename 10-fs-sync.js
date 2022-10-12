const { readFileSync, writeFileSync } = require("fs");
// console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);
//write in the file
writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${first},${second}`,
  { flag: "a" }
);
//{flag:"a"} will append the value
