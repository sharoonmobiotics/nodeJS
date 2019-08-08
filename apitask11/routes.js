var appRouter = function (app) {

  
  app.get("/student/result/:num", function (req, res) {
   
   var num = req.params.num;

   if (isFinite(num) && num  >= 100 && num  <= 200) {
     

     res.status(200).send("Welcome Result Website");
    
   } else {
     res.status(404).send({ message: 'invalid id' });
   }

 });
 
}

module.exports = appRouter;


