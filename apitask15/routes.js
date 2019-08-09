var express = require("express");
var router = express.Router();

router.post("/student/submit", function (req, res) {
	console.log(req.body);
		var query1=req.body;	
	    res.send(query1);
});
 
	
 
router.get("*", (req, res) => {
	res.status(404).send({ message: 'invalid information'});
})
 
module.exports = router;


