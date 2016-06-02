structureJS.configure(
{
  globals : [
            'https://code.jquery.com/jquery-2.2.3.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
            'lib/bootstrap-switch.min',
            'admin-theme/bower_components/datatables/media/js/jquery.dataTables.min',
            'https://js.braintreegateway.com/js/braintree-2.24.1.min.js',
            'templar/Constants', 
            'templar/Util', 
            'classes/ClassTMP_Node',
            'classes/ClassModel',
            'classes/Attribute.class',
            'classes/Component.class',
            'classes/Token.class',
            'templar/State',
            'templar/DOM'],
            
  styles : [
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min',
    'admin-theme/bower_components/metisMenu/dist/metisMenu.min',
    'admin-theme/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap',
    'admin-theme/dist/css/timeline',
    'admin-theme/dist/css/sb-admin-2',
    'admin-theme/bower_components/morrisjs/morris',
    'admin-theme/bower_components/font-awesome/css/font-awesome.min',
    'css/bootstrap-switch.min'
  ],
  
  directory_aliases : {modules : 'Modules/', 
                      templar : '../Templar/TemplarJS/', 
                      classes : '../Templar/TemplarJS/Classes/'
                      }
});

