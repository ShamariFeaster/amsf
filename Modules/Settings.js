structureJS.module('Settings', function(require){
  var profile = Templar.getModel('Profile');
  
  Templar.success('partials/settings.html', function(){

    $(".bs-switch").bootstrapSwitch({
        state : profile.notifications,
        onSwitchChange : function(e, state){
          profile.notifications = state;
        }
    });
    
  });
});