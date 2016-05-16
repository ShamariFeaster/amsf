structureJS.module('Profile', function(require){
  var profile =  Templar.getModel('Profile');

  var ref = require('Firebase').ref;
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      profile.loginStatus = 'Thanks for logging in, ' + authData.facebook.displayName + '!';
      profile.imgSrc = authData.facebook.profileImageURL;
      profile.id = authData.facebook.id;
      
      var geoOptions = {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
      };
      
      function geoError() {
        console.log("Sorry, no position available.");
      }
      
      function geoSuccess(position) {
        profile.lat = position.coords.latitude; 
        profile.lng = position.coords.longitude;
      }
        
      
      
      //getCurrent coordinates
      navigator.geolocation.getCurrentPosition(geoSuccess);
      
      //watch coordinates
      var watchId = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
      //set firebase request proximity listeners
    }
  });
  
});