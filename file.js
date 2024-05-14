const fs = require("fs");

const readText = fs.readFileSync("./texts/read.txt", "utf-8");

const wrightText = fs.writeFileSync(
  "./texts/wright.txt",
  readText + "This is my new text"
);

console.log(wrightText);
