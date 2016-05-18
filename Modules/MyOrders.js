structureJS.module('MyOrders', function(require){
  var profile = Templar.getModel('Profile');
  
  Templar.success('partials/my-orders.html', function(){

    $("table#my-orders").DataTable();
    
  });
});