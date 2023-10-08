const fs = require("fs");

const filePath = "../content/big.txt"; // Change the file path as needed

const handleStream = (highWaterMark) => {
  const readStream = fs.createReadStream(filePath, {
    encoding: "utf8",
    highWaterMark: highWaterMark,
  });

  let chunkCount = 0;

  readStream.on("data", (chunk) => {
    chunkCount++;
    console.log(`Received chunk ${chunkCount} with ${chunk.length} bytes`);
  });

  readStream.on("end", () => {
    console.log(`Stream ended. Total chunks received: ${chunkCount}`);
  });

  readStream.on("error", (error) => {
    console.error("Error:", error);
  });
};

// Test the program with different values of highWaterMark
console.log("Testing with highWaterMark 64:");
handleStream(64);

console.log("\nTesting with highWaterMark 256:");
handleStream(256);

console.log("\nTesting with highWaterMark 1024:");
handleStream(1024);
