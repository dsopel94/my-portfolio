$(function() {
	$('.burger-block').click(function(event) {
		$(".menu").slideToggle("slow");
		console.log("clicked")
		event.preventDefault();
	});
});

$('.menu').click('a', function(event) {
		$(".menu").slideToggle("slow");
	});