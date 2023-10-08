const EventEmitter = require("events");

const emitter = new EventEmitter();

// Example 1: Emitting an event with a timer
setInterval(() => {
  emitter.emit("timerEvent", "Hi there from the timer!");
}, 2000);

emitter.on("timerEvent", (msg) => {
  console.log("Received timerEvent:", msg);
});

// Example 2: Emitting an event using an async function
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("customEvent", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("Received customEvent:", msg);
};

doWait();

// Emitting custom events
emitter.emit("customEvent", "Hello World!");
emitter.emit("customEvent", "This is a custom event!");

// Example 3: Chaining events
emitter.on("firstEvent", () => {
  console.log("Received firstEvent, emitting secondEvent...");
  emitter.emit("secondEvent", "This is the second event.");
});

emitter.on("secondEvent", (msg) => {
  console.log("Received secondEvent:", msg);
});

emitter.emit("firstEvent");
