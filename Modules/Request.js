structureJS.module('Request', function(require){
  var firebase = require('Firebase'),
      profile = Templar.getModel('Profile'),
      req = Templar.getModel('RequestForm');
  
  var btn = document.getElementById('save-req');
  btn.addEventListener('click', function(e){
    firebase.saveReq();
  });
  
  
});