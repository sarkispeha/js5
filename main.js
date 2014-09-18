$(document).on('ready', function() {
  
var textbox = $('.textbox');
var textshow = $('.textshow');
var editarea = $('.textshow textarea')

	textbox.click(function() {
		textbox.hide(500);
		textshow.show(500);
	})

	editarea.blur(function() {
		var newtext = editarea.val(); //grab text from textarea
		$('.textbox p').text(newtext);	//set .textbox p to new value
		textshow.hide(500);
		textbox.show(500);

	})

	// $('.editable').on('click', function() {

	// })




});