const http = require("http");
const StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Variables for the number guessing game
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessMessage = "Take a guess (1-100):";

const form = () => {
  return `
  <body style="font-family: Arial, sans-serif; background-color: #f0f0f0;">
  <p style="color: blue; font-size: 18px;">${guessMessage}</p>
  <form method="POST" style="margin-top: 20px;">
    <input name="guess" type="number" min="1" max="100" style="color: green; padding: 5px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;">
    <button type="submit" style="background-color: #007bff; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; font-size: 18px; cursor: pointer;">Submit</button>
  </form>
  </body>
  `;
};



const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);

      if (body["guess"]) {
        const userGuess = parseInt(body["guess"], 10);

        if (userGuess === randomNumber) {
          guessMessage = "Congratulations! You guessed the correct number.";
        } else if (userGuess < randomNumber) {
          guessMessage = "Too low. Try again!";
        } else {
          guessMessage = "Too high. Try again!";
        }
      } else {
        guessMessage = "Please enter a valid guess.";
      }

      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
