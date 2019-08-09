const fs = require('fs');

fs.readFile('sample1.txt', 'utf8', function(err, sample1) {
    if (err) {
        console.log("html module not found");
        throw err;
    }

    fs.readFile('sample2.txt', 'utf8', function(err, sample2) {
        if (err) {
            console.log("css module not found");
            throw err;
        }

        sample1 += sample2 ;
		console.log(sample1);
		
		fs.writeFile("output.txt", sample1, function(err) {
			if(err) {
				return console.log(err);
            }

			console.log("New content is written");

		}); 

    });
	
});

