const fs = require("fs");

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  } else {
    console.log(data);
  }

  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error Writhing text");
    }
  });
});
