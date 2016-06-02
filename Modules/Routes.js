Templar.Route([
{
  route : '#/new-request',
  partial : [
    { partial : 'partials/new-request.html', 
      target : '#main-content'
    },
    { partial : 'partials/modal.html', 
      target : '#modal'
    }]
  
},

{
  route : '#/settings',
  partial : 'partials/settings.html',
  target : '#main-content'
},

{
  route : '#/matched-orders',
  partial : 'partials/matched-orders.html',
  target : '#main-content'
},

{
  route : '#/my-orders',
  partial : [
    { partial : 'partials/my-orders.html', 
      target : '#main-content'
    },
    { partial : 'partials/modal.html', 
      target : '#modal'
    }]

},

{
  route : '#/streams',
  partial : 'partials/streams.html',
  target : '#main-content'
}
]);