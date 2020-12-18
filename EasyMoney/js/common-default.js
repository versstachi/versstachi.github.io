$(function() {

	$('.reviews-slider').slick({
		arrows: true,
		dots: true,
		centerMode: true,
		centerPadding: '60px',
    	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
 		 adaptiveHeight: true, 
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
				centerPadding: '0px',
		        infinite: true,
		        dots: true,
				  adaptiveHeight: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
				centerPadding: '0px',
		        slidesToScroll: 2,
 				 adaptiveHeight: true
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
				centerPadding: '0px',
		        slidesToScroll: 1,
 				 adaptiveHeight: true
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
  	});

});