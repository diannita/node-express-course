// Load the built-in fs module
const fs = require("fs");
const path = require("path");

// Define the file path
const filePath = path.join(__dirname, "temporary", "fileA.txt");

// Write three lines to the file using writeFileSync
fs.writeFileSync(filePath, "Line 1\n");

// Append two more lines to the file using writeFileSync with the "append" flag
fs.writeFileSync(filePath, "Line 2\n", { flag: "a" });
fs.writeFileSync(filePath, "Line 3\n", { flag: "a" });

// Read the file using readFileSync and log its contents to the console
const fileContents = fs.readFileSync(filePath, "utf-8");
console.log("File Contents:\n", fileContents);
