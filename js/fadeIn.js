$(document).ready(function() {

  $("#nameTitle").hide(0).delay(1000).fadeIn(3000);

  $("#nav").hide();

  $(window).scroll(function() {
    
  
  if ($(window).scrollTop() > 100) {
      $("#nav").fadeIn();      
  }
  else{
    $("#nav").fadeOut();
  }

    
 

  if ($(window).scrollTop() > $("#fadeInContact").offset().top - 400) {
      $("#fadeInContact").animate({"opacity" : "1"}, 1000);
       
  }


  if ($(window).scrollTop() > $("#fadeInAbout").offset().top - 400) {
      $("#fadeInAbout").animate({"opacity" : "1"}, 1000);
       
  }


  });




});