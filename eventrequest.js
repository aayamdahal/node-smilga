const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received from ${name} who's id is ${id}`);
});
customEmitter.on("error", () => {
  console.log(`data not received `);
});

customEmitter.emit("response", "john", 34);
customEmitter.emit("error");
