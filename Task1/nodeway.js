function placeOrder(et,id){

	console.log('receive order '+id )
	
	setTimeout(() => { console.log('delivery order '+id) }, et);

  }

 placeOrder(5000, 1);
 placeOrder(4000, 2);
 placeOrder(1000, 3);
 placeOrder(2000, 4);




