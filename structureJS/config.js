structureJS.configure(
{
  globals : [
            'templar/Constants', 
            'templar/Util', 
            'classes/ClassTMP_Node',
            'classes/ClassModel',
            'classes/Attribute.class',
            'classes/Component.class',
            'classes/Token.class',
            'templar/State',
            'templar/DOM'],
  directory_aliases : {modules : 'Modules/', 
                      templar : '../Templar/TemplarJS/', 
                      classes : '../Templar/TemplarJS/Classes/'
                      }
});

