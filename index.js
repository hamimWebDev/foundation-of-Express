// local module
const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");

// console.log(add(2, 3), a, add2(1, 2, 3), a2);

// built-in-module

const part = require("path");
console.log(
  part.join(
    "C:/Users/HP/Desktop/programming Hero/level-2/Mission-2/learning-node/",
    "local-1.js"
  )
);


