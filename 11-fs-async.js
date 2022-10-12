const { readFile, writeFile, writeFileSync } = require("fs");
console.log("start");
readFile("./content/first.txt/", "utf8", (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    // console.log(second);
    writeFile(
      "./content/result-async.txt",
      "Hello this is the async file handeling in node displayed by nischal gautam",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting a  new task");
