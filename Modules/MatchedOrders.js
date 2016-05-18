structureJS.module('MatchedOrders', function(require){
  var profile = Templar.getModel('Profile');
  
  Templar.success('partials/matched-orders.html', function(){

    $("table#matched-orders").DataTable();
    
  });
});