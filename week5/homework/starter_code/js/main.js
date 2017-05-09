
$(function() {

$('.readmore').click(function(event) {
	event.preventDefault();
	$('p').slideDown();
	$('#show-this-on-click').show();
	$('.readless').show();
	$('.readmore').hide();
});

$('.readless').click(function() {
	event.preventDefault();
	$('.hide').slideUp();
	$('#show-this-on-click').hide();
	$('.readless').hide();
	$('.readmore').show();
});

$('.learnmore').click(function() {
	event.preventDefault();
	$('span').slideDown();
	$('#learnmoretext').show();
	$('.learnmore').hide();
});

});