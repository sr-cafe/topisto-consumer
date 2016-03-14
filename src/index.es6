let processInput = function(error, input){
	var json = JSON.parse(input);
}

let readInput = function(cb){
	var chunks = [];
	process.stdin.pipe(process.stdout);

	process.stdin
		.on('data', function (chunk) {
			chunks.push(chunk);
		})
		.on('end', function () {
			cb(null, chunks.join(""));
		});
}

readInput(processInput);
