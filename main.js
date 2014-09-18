$(document).on('ready', function() {
  
	$('.textbox').click(function() {
		$('.textbox').hide(500);
		$('.textshow').show(500);
	})

	$('textarea').blur(function() {
		$('.textshow').hide(500);
		$('.textbox').show(500);

	})



});