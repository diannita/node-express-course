const { writeFile, readFile } = require("fs").promises;

// Create an async function to write three lines to temp.txt
const writer = async () => {
  try {
    await writeFile(
      "temp.txt",
      "Line 1 - Tomorrow's weather will be amazing!..\n" +
        "Line 2 - I love coding ...\n" +
        "Line 3 - Nodejs is pretty interesting"
    );
    console.log("File 'temp.txt' has been written.");
  } catch (error) {
    console.error("Error writing to 'temp.txt':", error);
  }
};

// Create an async function to read and log the contents of temp.txt
const reader = async () => {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log("Contents of 'temp.txt':\n", data);
  } catch (error) {
    console.error("Error reading 'temp.txt':", error);
  }
};

// Create an async function to call the writer and then the reader
const readWrite = async () => {
  await writer();
  await reader();
};

// Call the readWrite function to execute the tasks in order
readWrite();
