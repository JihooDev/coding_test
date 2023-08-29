let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 
let result = 0;
 
for(let i = 0; i <= input.length -1; i++) {
	result += Number(input[i]);
}
 
console.log(result);