const { writeFile, readFile } = require("fs").promises;

// Write line 1 to temp.txt
writeFile("temp.txt", "Line 1 - Tomorrow's weather will be amazing!..\n")
  .then(() => {
    // Append line 2 to temp.txt
    return writeFile("temp.txt", "Line 2 - I love coding ...\n", { flag: "a" });
  })
  .then(() => {
    // Append line 3 to temp.txt
    return writeFile("temp.txt", "Line 3 - Nodejs is pretty interesting\n", {
      flag: "a",
    });
  })
  .then(() => {
    // Read the contents of temp.txt
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    // Log the contents to the screen
    console.log("Contents of 'temp.txt':\n", data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
