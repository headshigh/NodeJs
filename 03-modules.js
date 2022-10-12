// // CommonJS, every file is module (by default)
// // Modules - Encapsulated Code (only share minimum)
// const data = require("./06-alternative-flavor");
// require("./07-mind-grenade");
//a module in javascript is a file containing releted code whose functionalities can be reused in the whole node js app bu using import/require and export keyword

const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");
console.log(names);
sayHi(names.john);
sayHi("susan");
console.log(data);
sayHi(data.items[1]);
sayHi(data.singlePerson.name);
