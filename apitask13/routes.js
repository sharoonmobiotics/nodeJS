var appRouter = function (app) {

  app.get("/show", function (req, res) {
    var id = req.query.id;
    var name = req.query.name;
    if (id==null || name==null ) {  
	    res.status(404).send({ message: 'invalid information ' });
    } else {
     res.status(200).send({ id :id, name: name});
    }
  });
 
  app.get("*", (req, res) => {
	  res.status(404).send({ message: 'invalid information'})
  })
  
}
module.exports = appRouter;


