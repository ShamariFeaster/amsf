structureJS.module('Controller.Data', function(require){
  return {
    reqStates : {'NEW' : 0, 'PENDING' : 1, 
                'ACCEPTED' : 2, 'CANCELED' : 3, 
                'COMPLETE' : 4, 'DISPUTED' : 5, 
                'PAID' : 6}
  };
});

structureJS.module('Root', function(require){

var ret = {
  map: null
};

window.initMap = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    ret.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 14
    });
  });
  
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '276590432673434',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  
return ret;

});


