$(document).ready(function(){
      if (window.location.hash == "#about-me") {
        $('html, body').animate({
           scrollTop: $("#about-me").offset().top
         }, 1000);
      }
   });