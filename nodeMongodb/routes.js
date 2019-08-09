var express = require("express");
var router = express.Router();

var assert = require('assert');

	
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27018/test';  //if (err) throw err

  //  if (err) throw err


  



	router.get("/customers/", (req, res) => {
	
		con.query("SELECT * FROM customers", function (err, result, fields) {	
		
		 res.status(200).send(result);
		});
		
	});
	router.get("/customers/ejs", (req, res) => {
	
		con.query("SELECT * FROM customers", function (err, result, fields) {	
		res.render('index',{data: result});
		
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
	
		
       
		var item = {
			title: req.fields.title,
			content: req.fields.content,
			author: req.fields.author
		};

		mongo.connect(url, function(err, db) {
			assert.equal(null, err);
			db.collection('user-data').insertOne(item, function(err, result) {
				assert.equal(null, err);
				console.log('Item inserted');
				db.close();
			});
		});
	
	});
	
	
	router.delete("/delete/:id", function (req, res) {
	
		var id=req.params.id;
       
		
		
		let sql = "DELETE FROM `customers` where customerNumber = ?";
		let data = [id]
		
		con.query(sql,data, function (err, result, fields) {
	        if(result.affectedRows){
				res.status(200).send('Success');
			}
			else{
				res.status(404).send('No row effected');	
			}
    
		});
		
		
		
	
	});
	
	router.get("/creditLimit/:limit/", function (req, res) {  
		var limited = req.params.limit;
		let statuscode=null;
		let sql = "SELECT * FROM (SELECT creditLimit FROM customers ORDER BY creditLimit DESC LIMIT "+limited+") AS Emp ORDER BY creditLimit LIMIT 1";
		
		
		con.query(sql, function (err, result, fields) {
		statuscode='The '+limited+' higest credit Limit is '+result[0].creditLimit;
			res.status(200).send(statuscode);
    
		});
    });
 	
 
	router.get("*", (req, res) => {
		res.status(404).send({ message: 'invalid information'});
	})
 
   
module.exports = router;


