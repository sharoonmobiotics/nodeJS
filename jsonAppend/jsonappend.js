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


function create(file, cb){
    var obj = {
        student: [] };
    obj.student.push({name: "haris", age:12}, {name: "raj", age:87});
    var json = JSON.stringify(obj);

    fs.writeFile(file, json, 'utf8',  function(err) {
        if(err) {
            return console.log(err);
        }else{
	    console.log("Json data created");
	    cb();
	    }
	});	
}	
	
function append(file, cb){	
    fs.readFile(file, 'utf8', function(err, data){
    if (err){
        console.log(err);
    } else {
        obj = JSON.parse(data); 
        obj.student.push({name: "sunil", age:24});
        json = JSON.stringify(obj);
        fs.writeFile(file, json, 'utf8',  function(err) {
            if(err) {
                return console.log(err);
            }else{
	            console.log("Json data appended");
	            cb();
	        }
	    }); 
    }});
}

create('myjsonfile.json', function() {
    read('myjsonfile.json', function() {
        append('myjsonfile.json', function() {
            read('myjsonfile.json', function() {

            });
         });
    });
})


