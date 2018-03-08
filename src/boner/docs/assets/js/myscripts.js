//controller for dropdown-menus (global)

$(function() {
//make menu drop automatically
$('ul.nav li.dropdown').hover(function() {
$('.dropdown-menu', this).fadeIn();
}, function(){
  $('.dropdown-menu', this).fadeOut('fast');
});//hover   
});//jquery loaded