structureJS.module('MyOrders', function(require){
  var profile = Templar.getModel('Profile'),
      firebase = require('Firebase'),
      modal = Templar.getModel('Modal');
  
  Templar.success('#/my-orders', function(){
    
    modal.title = 'Cancel Order?';
    modal.body = 'By clicking OK you will be cancelling an order';
    modal.dismissTxt = 'Cancel';
    modal.acceptTxt = 'OK';
    
    $("table#my-orders").DataTable();
    $('#cancel').click(function(e){
      var id = e.target.getAttribute('id');
    });
    
  });
});