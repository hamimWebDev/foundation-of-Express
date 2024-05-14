const eventEmitter = require("events");

const myEmitter = new eventEmitter();

// listener

myEmitter.on("Birthday", () => {
  console.log("HAPPY BIRTHDAY TO YOU");
});

myEmitter.on("Birthday", (gift) => {
  console.log(`I WILL SEND A ${gift}`);
});

myEmitter.emit("Birthday", "bike");
