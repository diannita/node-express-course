// Using console.log to print global variables
console.log("__dirname:", __dirname); // Print the current directory of the script
console.log("process.env.MY_VAR: ", process.env.MY_VAR); // Print the value of the MY_VAR environment variable

// need to lauch first in terminal export MY_VAR="Hi there!" to save inmemeory after run node 02-globals.js
//result
// dianitaro@Dianitas-Mac-mini answers % node 02-globals.js     
// __dirname: /Users/dianitaro/Documents/GitHub/node-express-course/01-node-tutorial/answers
// process.env.MY_VAR: Hi there