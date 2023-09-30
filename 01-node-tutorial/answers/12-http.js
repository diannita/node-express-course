// Load the built-in http module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the requested URL
  const url = req.url;

  // Set the content type to plain text
  res.setHeader("Content-Type", "text/plain");

  // Check the URL and send back a message accordingly
  if (url === "/") {
    res.end("Welcome to the homepage!");
  } else if (url === "/about") {
    res.end("This is the about page.");
  } else if (url === "/contact") {
    res.end("Contact us at example@email.com.");
  } else {
    res.end("Page not found.");
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
