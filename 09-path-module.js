//we need this because we will be working in different environment and we need to locate a certain resource in the environment for each user
const path = require("path");
console.log(path.sep);
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
