const process = require('process');

var tools = require('./calc');

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);


console.log("Input values are a ="+ x + " b = "+y);

console.log("sum result = ", tools.add(x, y)); 
console.log("sub result = ", tools.sub(x, y)); 
console.log("mul result = ", tools.mul(x, y));
console.log("div result = ", tools.div(x, y));

