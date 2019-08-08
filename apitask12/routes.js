var appRouter = function (app) {

   

  
  app.get("/flight/:sourceCityName-:destinationCityName", function (req, res) {
   
   var sourceCityName = req.params.sourceCityName;
   var destinationCityName = req.params.destinationCityName;

   if (sourceCityName==null || destinationCityName==null ) {
     
	 res.status(404).send({ message: 'invalid information, please add city name ' });
      

    
   } else {
     res.status(200).send({ Source : sourceCityName ,Destination: destinationCityName});
   }

 });
 
 app.get("*", (req, res) => {
	 res.status(404).send({ message: 'invalid information, please add city name ' });
	 
	 }
)

}
module.exports = appRouter;


