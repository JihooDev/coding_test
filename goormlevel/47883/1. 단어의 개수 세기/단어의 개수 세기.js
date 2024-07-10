// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const result = line.split(" ").filter(val => val != '').length;
	
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});