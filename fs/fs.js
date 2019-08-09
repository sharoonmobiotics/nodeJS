const fs = require('fs');

function read(file, cb){
var content;
fs.readFile(file, 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    console.log(content);
    cb();
}); 
}
function append(file, cb){
fs.appendFile(file, '+ this is append data', function (err) {
  if (err) throw err;
  console.log('New content is Appended');
  cb();
});
}
function write(file, cb){
fs.writeFile(file, "this is written data ", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("New content is written");
    cb();
}); 
}

write('sample.txt', function() {
    read('sample.txt', function() {
        append('sample.txt', function() {
            read('sample.txt', function() {

            });
         });
    });
})

