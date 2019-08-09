function placeOrder(et,id, cb){

	  console.log('receive order '+id )
	
  	setTimeout(() => { console.log('delivery order '+id) 
     cb();   
     }, et);

}

placeOrder(5000, 1, function() {
  placeOrder(4000, 2, function() {
    placeOrder(1000, 3, () => {
      placeOrder(2000, 4, () => {
        
       });
    });
  });
})