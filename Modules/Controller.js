structureJS.module('Controller.Data', function(require){
  return {
    reqStates : {'NEW' : 0, 'PENDING' : 1, 
                'ACCEPTED' : 2, 'CANCELED' : 3, 
                'COMPLETE' : 4, 'DISPUTED' : 5, 
                'PAID' : 6}
  };
});

structureJS.module('Root', function(require){


window.initMap = function() {
  console.log('Maps Loaded.....')  
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '276590432673434',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.6'
    });
  };


});


