function placeOrders(et, id) {
  console.log('receive order '+id )
  
  return new Promise(function(resolve, reject) {
    setTimeout(() => { resolve('delivery order '+id) }, et); 
  });
}

placeOrders(5000, 1).then(function(res) {
  console.log(res);
  placeOrders(4000, 2).then(function(res) {
    console.log(res);
    placeOrders(1000, 3).then(function(res) {
      console.log(res);
      placeOrders(2000, 4).then(function(res) {
        console.log(res);
      });
    });
  });
});



