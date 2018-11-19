$(function() {
	$('.slider-slick').slick({
		dots: false,
		arrows: true,
  		slidesToShow: 2,
 		slidesToScroll: 1,
 		responsive: [ 
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
	});
	$('.slide-actuality').slick({
		dots: false,
		arrows: true,
  		slidesToShow: 3,
 		slidesToScroll: 1,
 		responsive: [ 
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
	});  
	$('.slick-resp').slick({
		dots: true,
		arrows: false,
  		slidesToShow: 2,
 		slidesToScroll: 1,
 		responsive: [ 
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
	});  
	// scroll to div
	$('.up-link').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {

	        $('html,body').animate({

	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	// menu hamb
	$(".close-bt").click(function(){
		$(".nav-hidd").toggleClass('nav-visib', 'slow', "easeOutSine");
	});     
    // NAV TOGGLE ONHOVER WITH FADE
    $(".hoverFade ul").hide();
    $(".hoverFade").hover(function(){
        $(this).children("ul").stop(true,true).fadeToggle("fast"),
        $(this).toggleClass("dropdown-active");
    });
});