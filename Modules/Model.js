Templar = structureJS.require('Templar');

Templar.dataModel('Environment',
            {
              /*Base page */
              siteName :  'Nitework',
              footer : 'Footer',
              host : 'http://nitework.com',
              
              /*Page Clock*/
              time : '',
              
              image_templar : 'images/Cross_Templar.svg'
            });
           
         
Templar.dataModel('RequestForm',{
  search : '608 Holcomb Bridge Road, Roswell, GA, United States',
  lat : 0,
  lng : 0,
  title : 'eg, Show me the club line',
  description : 'eg, why I want to see the club line',
  length : [{text : '1 Minute', value : 1, selected : true}, 
            {text : '2 Minutes', value : 2},
            {text : '3 Minutes', value : 3},
            {text : '4 Minutes', value : 4},
            {text : '5 Minutes', value : 5}
            ],
  offer : '0.50',
  expires : [{text : '1 Minute From Now', value : 1, selected : true}, 
            {text : '2 Minutes From Now', value : 2},
            {text : '3 Minutes From Now', value : 3},
            {text : '4 Minutes From Now', value : 4},
            {text : '5 Minutes From Now', value : 5}
            ],
  accepted : false          
});

Templar.dataModel('Geofire',{
  matchingReqs : []
});

Templar.dataModel('Modal',{
  title : '',
  body : '',
  dismissTxt : '',
  acceptTxt : '',
  acceptId : 'modal-accept',
  dismissId : 'modal-dismiss'
});

Templar.dataModel('Profile',{
  loginStatus : '',
  imgSrc : 'https://s-media-cache-ak0.pinimg.com/236x/8e/29/f2/8e29f2925bc2e7d5a05fa21f369ab80f.jpg',
  range : '2',
  id : 0,
  myReqs : [],
  lat : -1,
  lng : -1,
  notifications : true
});
