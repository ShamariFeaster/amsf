structureJS.module('AutoComplete', function(require){
//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
var placeSearch, 
    autocomplete,
    _map,
    _lat, _lng,
    reqForm = Templar.getModel('RequestForm');
    
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')));

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    console.log(place);
    reqForm.lat = _lat = place.geometry.location.lat();
    reqForm.lng = _lng = place.geometry.location.lng();
    
    var marker = new google.maps.Marker({
      position: {lat: reqForm.lat, lng: reqForm.lng},
      map: _map,
      title: 'Hello World!'
    });
    
    _map.setCenter(marker.getPosition());
    _map.setZoom(16);
  });
}


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

Templar.success('partials/new-request.html', function(){
  
  navigator.geolocation.getCurrentPosition(function(position) {
    _lat = position.coords.latitude;
    _lng = position.coords.longitude;
    _map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: _lat, lng: _lng},
      zoom: 14
    });
    
    initAutocomplete();
  });
  
  if(_lat && _lng){
    _map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: _lat, lng: _lng},
      zoom: 14
    });
    initAutocomplete();
  }
  
});


});