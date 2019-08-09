var appRouter = function (app) {

	app.get("/student", function (req, res) {
	
		if (req.headers.authorization!="mobiotics") {
     		return res.status(401).send({ message: 'Please make sure your request has an Authorization header...' });
		}else{	
			res.status(200).send(students);
		}
 	});
 
	
    app.get("/student/:id", function (req, res) {  
		if (req.headers.authorization!="mobiotics") {
			return res.status(401).send({ message: 'Please make sure your request has an Authorization header...' });
		}else{
			var id = req.params.id;
			let info = students.data;

			let arr = info.filter((d)=> {
				if(d.ID == id) {
					return d;
				}
			});
		res.status(200).send(arr);
		}
    });
	
    app.get("/students", function (req, res) {  
	
		if (req.headers.authorization!="mobiotics") {
			return res.status(401).send({ message: 'Please make sure your request has an Authorization header...' });
		}else{
			var name = req.query.name;
			let info = students.data;
   
			let arr = info.filter((d)=> {
				if(d.Name == name) {
				return d;
				}
			});
			res.status(200).send(arr);
		}
	});
	
	app.get("/student/:minage/:maxage", function (req, res) {  
		if (req.headers.authorization!="mobiotics") {
			return res.status(401).send({ message: 'Please make sure your request has an Authorization header...' });
		}else{
			var maxage = req.params.maxage;
			var minage = req.params.minage;
			let info = students.data;

			let arr = info.filter((d)=> {
				if(d.Age >= minage && d.Age < maxage) {
					return d;
				}
			});
			res.status(200).send(arr);
		}
	});

	app.get("*", (req, res) => {
		res.status(404).send({ message: 'invalid information'});
	})
 
}
var students ={
  "data": [
    {
      "ID": "1",
      "Name": "Senpai",
      "Gender": "1",
      "Class": "32",
      "Age": "15"
    },
    {
      "ID": "2",
      "Name": "Yui Rio",
      "Gender": "0",
      "Class": "11",
      "Age": "14"
    },
    {
      "ID": "3",
      "Name": "Yuna Hina",
      "Gender": "0",
      "Class": "12",
      "Age": "14"
    },
    {
      "ID": "4",
      "Name": "Koharu Hinata",
      "Gender": "0",
      "Class": "21",
      "Age": "20"
    },
    {
      "ID": "5",
      "Name": "Mei Mio",
      "Gender": "0",
      "Class": "22",
      "Age": "09"
    }
  ]
};
module.exports = appRouter;


