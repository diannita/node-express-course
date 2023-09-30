// Load the built-in path module
const path = require("path");

console.log("Path made")
// Define a sequence of alphanumeric strings to join
const parts = ["Users", "JohnSmith", "node-express-course", "01-node-tutorial", "answers"];

// Use path.join to join the strings into a path
const joinedPath = path.join(...parts);

// Print out the result
console.log("Joined Path:", joinedPath);

console.log(" ");
console.log(" ");

console.log("Local Path")
// local path by providing the sequence of folders and files
const local_parts = [
  "Users",
  "dianitaro",
  "Documents",
  "GitHub",
  "node-express-course",
  "01-node-tutorial"
];

// Use path.join to join the strings into a path
const local_joinedPath = path.join(...local_parts);

// Print out the result
console.log("Joined Path:", local_joinedPath);

console.log(" ");
console.log(" ");

console.log("local path with __dirname")
// Use __dirname to get the directory name of the current module
const currentDir = __dirname;
// Print out the result
console.log("Current Directory (Local Path):", currentDir);
