//--- Fires first ---
// $(document).on('init', function(event) {
//   var page = event.target;
//   if (page.id === 'page1') {
//     $('#push-button').on('click', function() {
//       $('#myNavigator')[0]
//         .pushPage('page2.html', {
//           data: { message: 'it works' }
//         })
//         .then(function() {
//           ons.notification.alert('page pushed');
//         });
//     });
//   }

//   if (page.id === 'page2') {
//     $('#push-button-2').on('click', function() {
//       ons.notification.alert('page2 button pushed');
//     });
//   }
// });

window.fn = {};

window.fn.open = function() {
  //var menu = document.getElementById('menu');
  var menu = $('#menu')[0];
  menu.open();
};

window.fn.load = function(page) {
  //var content = document.getElementById('content');
  var content = $('#content')[0];
  //var menu = document.getElementById('menu');
  var menu = $('#menu')[0];
  content.load(page).then(menu.close.bind(menu));
};
