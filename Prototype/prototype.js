const process = require('process');
var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);


function calculator(number_one, number_two) {
	
  this.number_one = number_one;
  this.number_two = number_two;
 
}


calculator.prototype.sum = function() {
	
  return +this.number_one + +this.number_two
  
};

calculator.prototype.sub = function() {
	
  return +this.number_one - +this.number_two
  
};

calculator.prototype.mul = function() {
	
  return +this.number_one * +this.number_two
  
};

calculator.prototype.div = function() {
	
  return +this.number_one / +this.number_two
  
};


var result = new calculator(x, y);

console.log("Values, a = "+x + " b = " +y);

console.log("sum Result = ", result.sum());
console.log("sub Result = ", result.sub());
console.log("mul Result = ",result.mul());
console.log("div Result = ", result.div());