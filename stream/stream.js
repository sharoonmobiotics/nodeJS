var fs = require("fs");



function readStream(cb){
var data = '';

var readerStream = fs.createReadStream('sample.txt', 'UTF8');


readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end', function() {
   console.log('Writtrn data : ', data);
   cb();
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});


}

function writeStream(data, cb){

var writerStream = fs.createWriteStream('sample.txt');

writerStream.write(data, 'UTF8');

writerStream.end();
writerStream.on('finish', function() {
   console.log("Write completed.");
   cb();
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

}

writeStream( 'helloo there!', function() {
    readStream( function() {
        
    });
})