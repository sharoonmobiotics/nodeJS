const fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('emiter', function() {
console.log('your file reading is complete');
});


function read(file){
var content;
fs.readFile(file, 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
	eventEmitter.emit('emiter');
    console.log('data :', content);
    
}); 
}
read('sample.txt');




