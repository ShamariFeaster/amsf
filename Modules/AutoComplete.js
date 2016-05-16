structureJS.module('AutoComplete', function(require){
//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
var placeSearch, 
    autocomplete,
    _map = require('Root'),
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
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    console.log(place);
    reqForm.lat = place.geometry.location.lat();
    reqForm.lng = place.geometry.location.lng();
    
    var marker = new google.maps.Marker({
      position: {lat: reqForm.lat, lng: reqForm.lng},
      map: _map.map,
      title: 'Hello World!'
    });
    
    _map.map.setCenter(marker.getPosition());
    _map.map.setZoom(16);
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

initAutocomplete();

});