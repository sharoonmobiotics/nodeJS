var express = require("express");
var router = express.Router();


var mysql = require('mysql')
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'customers'
})

	con.connect(function(err) {
		if (err) throw err;
		console.log("success db");
	
	});

	router.get("/customers/", (req, res) => {
	
		con.query("SELECT * FROM customers", function (err, result, fields) {	
		res.status(200).send(result);
		});
		
	});
	
	router.get("/customers/:id", function (req, res) {  
		var id = req.params.id;
        let sql = "SELECT * FROM customers where customerNumber= ?";
		let data = [id]
		
		con.query(sql, data, function (err, result, fields) {
			res.status(200).send({ customers: result});
		});
		
    });
	
	
	router.get("/customers/:id/:rid", function (req, res) {  
		var id = req.params.id;
		var rid = req.params.rid;
		
		let sql = "SELECT * FROM customers where customerNumber between ? and ?";
		let data = [id,rid]
		
		con.query(sql,data, function (err, result, fields) {
	
			res.status(200).send({ customers: result});
    
		});
    });
	
	router.get("/customers/country/:name1/:name2", function (req, res) { 
 
		var name1 = req.params.name1;
		var name2 = req.params.name2;
		
		let sql = "SELECT * FROM customers where country in (? , ?)";
		let data = [name1,name2]
		
		con.query(sql,data, function (err, result, fields) {
		res.status(200).send({ customers: result});
		});

		
    });

	router.post("/customers/submit", function (req, res) {
	
		var obj=req.fields;
       
		var arr1 = [];
		var arr2 = [];
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
			arr1.push(key);
			arr2.push(obj[key]);
			}
		};
		
		var key = arr1.join(",");
		var value = arr2.join("','");
		
		console.log("value", value)

		let sql = "INSERT INTO customers ("+key+") VALUES ('"+value+"')";
		
		con.query(sql, function (err, result) {
				
			res.status(200).send({ customers: result});
  
		});
		
		
		
	
	});
 
	
 
 router.get("*", (req, res) => {
	 res.status(404).send({ message: 'invalid information'});
	 })
 
   
module.exports = router;


