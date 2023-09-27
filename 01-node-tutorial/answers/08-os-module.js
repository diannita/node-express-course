// Load the built-in os module
const os = require("os");

// Get information from the os module
console.log("Hostname:", os.hostname()); // Get the hostname of the computer
console.log("OS Type:", os.type()); // Get the operating system name
console.log("Platform:", os.platform()); // Get the platform (e.g., "darwin" for macOS, "win32" for Windows)
console.log("Total Memory (bytes):", os.totalmem()); // Get the total system memory in bytes
console.log("Free Memory (bytes):", os.freemem()); // Get the free system memory in bytes
console.log("Number of CPUs:", os.cpus().length); // Get the number of CPUs