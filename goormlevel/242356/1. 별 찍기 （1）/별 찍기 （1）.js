// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		for(let i = 1; i <= line; i++){
			let command = "";
			for(let j = 1; j <= i; j++) {
				command+="*";
			}
			
			console.log(command);
		}
		rl.close();
	}
	
	process.exit();
})();
