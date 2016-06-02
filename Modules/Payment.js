structureJS.module('Payments', function(require){
var profile = Templar.getModel('Profile');
var idSet = false;

function setId(){
  idSet = true;
}
profile.listen('id',setId);

function setUpBraintree(){
  var id = profile.id;
    $.ajax(
    {
      url: 'braintree/public_html/getToken.php',
      data : {id : id},
      method : 'GET',
      success : function(token, status,xhr){
        console.log('Payments');
        profile.unlisten('id',setUpBraintree);
        braintree.setup(token, "dropin", {
          container: "dropin-container",
          onPaymentMethodReceived : function(obj){
            console.log('RECIEVED');
            console.log(obj);
          }
        });

      },
      error : function(xhr, status, error){
        console.log(status);
      }
    });
}

Templar.success('#/settings', function(){
  
  if(idSet){
    setUpBraintree();
  }else{
    profile.unlisten('id',setId);
    profile.listen('id',setUpBraintree);
  }
  
  
});


});