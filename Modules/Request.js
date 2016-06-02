structureJS.module('Request', function(require){
  var firebase = require('Firebase'),
      profile = Templar.getModel('Profile'),
      req = Templar.getModel('RequestForm'),
      modal = Templar.getModel('Modal');
  
  var idSet = false;

  function setId(){
    idSet = true;
  }
  
  profile.listen('id',setId);

  function setUpBraintree(){
    var id = profile.id;
    setId();
      $.ajax(
      {
        url: 'braintree/public_html/getToken.php',
        data : {id : id},
        method : 'GET',
        success : function(token, status,xhr){
          console.log('Request');
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
  
  Templar.success('#/new-request', function(){
    var stageOne = document.getElementById(modal.acceptId);
    req.accepted = false;
    
    modal.title = 'Confirm Order?';
    modal.body = 'By clicking OK you will be charged $'+req.offer+' if your order is accepted.';
    modal.dismissTxt = 'Cancel';
    modal.acceptTxt = 'OK';
    
    if(idSet){
        setUpBraintree();
        
      }else{
        profile.unlisten('id',setId);
        profile.listen('id',setUpBraintree);
        
      }

    stageOne.addEventListener('click', function(e){
      firebase.saveReq();
      req.accepted = true;
    });
  });
  
  
  
});