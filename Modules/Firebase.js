structureJS.module('Firebase', function(require){
  var ref = new Firebase("https://nitework.firebaseio.com/"),
      data = require('Controller.Data'),
      profile = Templar.getModel('Profile'),
      geoMdl = Templar.getModel('Geofire'),
      reqMdl = Templar.getModel('RequestForm');
      
  var geofire = new GeoFire(ref),
      _geoQuery = null;
  
  function truncatedTime(){
    return new Date().getTime().toString().substr(0,10);
  }
  
  function Request(requestForm, profileMdl){
    this.lat = requestForm.lat;
    this.lng = requestForm.lng;
    this.requestorId = profileMdl.id;
    this.state = 0;
    this.handlerId = -1;
    this.expires = parseInt(truncatedTime()) + (requestForm.expires.current_selection * 60);
    this.offer = requestForm.offer;
    this.created = truncatedTime();
    this.title = requestForm.title;
    this.description = requestForm.description;
    this.length = requestForm.length.current_selection;
  }
  

  _geoQuery = geofire.query({
    center : [profile.lat, profile.lng],
    radius : profile.range / 2.2
  });
  
  function updateGeoQuery(){
    _geoQuery.updateCriteria({
      center : [profile.lat, profile.lng],
      radius : profile.range / 2.2
    });
  }
  
  profile.listen('range', function(e){
    updateGeoQuery();
    console.log('range now ' + (parseInt(e.value) / 2.2));
  });
  
  profile.listen('lat', function(e){
    updateGeoQuery();
    console.log('position updated to lat ' + e.value + ' lng ' + profile.lng);
  });
  
  //EVENT LISTENERS
  ref.child('requests').on("child_added", function(snapshot, prevChildKey) {
    var newReq = snapshot.val();
    profile.myReqs.push(snapshot.key());
  });
  
  var onReadyRegistration = _geoQuery.on("ready", function() {
    console.log("GeoQuery has loaded and fired all other events for initial data");
  });

  var onKeyEnteredRegistration = _geoQuery.on("key_entered", function(key, location, distance) {
    console.log(key + " entered query at " + location + " (" + distance + " km from center)");
    
    ref.child('requests').child(key).once('value', function(data){
      geoMdl.matchingReqs.push({key : data.key(), request : data.val()});
      geoMdl.update('matchingReqs');
    });
    
  });

  var onKeyExitedRegistration = _geoQuery.on("key_exited", function(key, location, distance) {
    console.log(key + " exited query to " + location + " (" + distance + " km from center)");
    
    ref.child('requests').child(key).once('value',function(data){
      geoMdl.matchingReqs = geoMdl.matchingReqs.filter(function(obj){
        return (obj.key != data.key());
      });
      geoMdl.update('matchingReqs');
    });
    
  });

  var onKeyMovedRegistration = _geoQuery.on("key_moved", function(key, location, distance) {
    console.log(key + " moved within query to " + location + " (" + distance + " km from center)");
  });
  
  function saveReq(){
    var reqRef = ref.child('requests').push(new Request(reqMdl, profile));
    geofire.set(reqRef.key(), [reqMdl.lat, reqMdl.lng]);
  }
  
  return {
    ref : ref,
    geo : geofire,
    saveReq : saveReq
  };
});