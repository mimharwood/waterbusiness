$(document).ready(function(){
    $(".dropdown-toggle").dropdown("toggle");

  	$('.boat').each(function(i){ $(this).css('animation-delay', -i+'s')});
  $('[data-float-wrong]').css( {
    'float':'none',
    'position' : 'relative',
    'top' : '150px',
    'transform' : 'rotate(40deg)'
  });
});