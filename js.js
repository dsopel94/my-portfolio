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

$(window).scroll(function() {
  
	var projects =$('#greeting').offset(); 
	var about_me =$('#pre-about-me').offset();
	var skills = $('#skills-intro').offset();
	var contact= $('#contact-intro').offset();

  // selectors
  var $window = $(window),
      $body = $('body'),
      $section = $('.section'),
      $nav = $('nav a')
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

//   if( $(window).scrollTop()+$('.nav-bar').height()>=about_me.top+10 &&
//    $(window).scrollTop()+$('.nav-bar').height()< skills.top+10 )
// {
//     $('#skills-nav').css('color','blue');
//     console.log("scrolled down here")
// }

// 	else if ($(window).scrollTop() < skills.top+10)
// 	{
//     	$('#skills-nav').css('color','white');
// 	}

// 	if ($(window).scrollTop() >= skills.top)
// 	{
// 		$('#contact-nav'.css('color', 'green'));
// 	}
 
  $section.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      $nav.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();