// Load the built-in fs module
const fs = require("fs");
const path = require("path");

// Define the file path
const filePath = path.join(__dirname, "temporary", "fileB.txt");

// Write three lines to the file asynchronously using fs.writeFile
fs.writeFile(filePath, "Line 1 - Love and war\n", { flag: "w" }, (err) => {
  if (err) {
    console.error("Error writing Line 1:", err);
    return;
  }
  console.log("Line 1 has been written.");
  
  fs.writeFile(filePath, "Line 2 - cats and dogs\n", { flag: "a" }, (err) => {
    if (err) {
      console.error("Error writing Line 2:", err);
      return;
    }
    console.log("Line 2 has been written.");

    fs.writeFile(filePath, "Line 3 - koreans and chinese\n", { flag: "a" }, (err) => {
      if (err) {
        console.error("Error writing Line 3:", err);
        return;
      }
      console.log("Line 3 has been written.");

      // After all lines have been written, read and log the file contents
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading the file:", err);
          return;
        }
        console.log("File Contents:\n", data);
      });
    });
  });
});
