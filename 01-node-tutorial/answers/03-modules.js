// require files
const names = require("./04-names.js");
const greet = require("./05-utils.js");
const altFlavor = require("./06-alternative-flavor.js");

// Using values from 04-names.js
console.log("04-names.js");
console.log(`Full Name: ${names.firstName} ${names.lastName}`);
console.log(`Age: ${names.age}`);
console.log(" ");

// Using the function from 05-utils.js
console.log("05-utils.js ");
console.log(greet(names.firstName));
console.log(" ");

// Using values from 06-alternative-flavor.js
console.log("06-alternative-flavor.js ");
console.log(`Item 1: ${altFlavor.item1}`);
console.log(`Item 2: ${altFlavor.item2}`);
console.log(`Item 3: ${altFlavor.item3}`);
console.log(" ");

// Calling the function from 07-mind-grenade.js
console.log("07-mind-grenade.js");
require("./07-mind-grenade.js"); 
console.log(" ");