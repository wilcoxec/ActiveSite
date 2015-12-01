$(document).ready(function() {

  $("#nameTitle").hide(0).delay(4000).fadeIn(3000);

  $("#nav").hide();

  $(window).scroll(function() {
    
  
  if ($(window).scrollTop() > 100) {
      $("#nav").fadeIn();      
  }
  else{
    $("#nav").fadeOut();
  }

    
  // if ($(window).scrollTop() > $("#fadeInE").offset().top - 400 ) {
  //     $("#fadeInE").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#fadeInE1").offset().top - 400 ) {
  //     $("#fadeInE1").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#fadeInE2").offset().top - 400 ) {
  //     $("#fadeInE2").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#fadeInE3").offset().top - 400 ) {
  //     $("#fadeInE3").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#fadeInEdu").offset().top - 400 ) {
  //     $("#fadeInEdu").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#fadeInEdu1").offset().top - 400 ) {
  //     $("#fadeInEdu1").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#fadeInEdu2").offset().top - 400 ) {
  //     $("#fadeInEdu2").animate({"opacity" : "1"}, 1000);
       
  // }

  // if ($(window).scrollTop() > $("#backgroundQuote").offset().top - 100) {
  //     $("#backgroundQuote").animate({"opacity" : "1"}, 1200);
       
  // }

  if ($(window).scrollTop() > $("#fadeInContact").offset().top - 400) {
      $("#fadeInContact").animate({"opacity" : "1"}, 1000);
       
  }

  // if ($(window).scrollTop() > $("#fadeInhr").offset().top - 600) {
  //     $("#fadeInhr").animate({"opacity" : "1"}, 1000);
       
  // }

  if ($(window).scrollTop() > $("#fadeInAbout").offset().top - 400) {
      $("#fadeInAbout").animate({"opacity" : "1"}, 1000);
       
  }

  // if ($(window).scrollTop() > $("#fadeInProjects").offset().top - 400 ) {
  //     $("#fadeInProjects").animate({"opacity" : "1"}, 1500);
       
  // }


  });




});