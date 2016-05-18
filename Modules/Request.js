structureJS.module('Request', function(require){
  var firebase = require('Firebase'),
      profile = Templar.getModel('Profile'),
      req = Templar.getModel('RequestForm');
  
  Templar.success('partials/new-request.html', function(){
    var btn = document.getElementById('save-req');
    btn.addEventListener('click', function(e){
      firebase.saveReq();
    });
  });
  
  
  
});