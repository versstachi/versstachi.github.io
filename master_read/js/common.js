$(function() {

$('.sandwich').click(function () {
	$('ul.menu').toggle('show');
	$(this).toggleClass('closed'); 
	$('header ul.menu a').click(function(){
  $('ul.menu').toggle('show');
	$('.sandwich').toggleClass('closed'); 
});
});


$('.countdown').timeTo(100, function(){ 
	// alert('Время истекло'); 
	$('#coumter-modal').modal('show');
}); 
// slick - init-resp
$('.slider-init-resp').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true, 
	dots: false,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  
});
// slick - video
  $('.slider-video-resp').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter2"><span class="current2"></span><span class="total2"></span></div>');
    $('.current2').text(slick.currentSlide + 1); 
     $('.total2').text('/ ' +slick.slideCount); 
  })
  .slick({
  arrows: true, 
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  infinite: true,
  speed: 500,
  fade: false,
  adaptiveHeight: true,
  cssEase: 'linear',  
  asNavFor: '.slider-nav'
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current2').text(nextSlide + 1);
  }); 
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-video-resp',
  dots: false,
  centerMode: true,
  arrows: false, 
  centerPadding: '300px',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
		centerMode: false,
		centerPadding: '50px',
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
		centerMode: false,
        slidesToScroll: 1,
		centerPadding: '100px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
		centerMode: false,
        slidesToScroll: 1,
		centerPadding: '30px',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slick - video
  $('.slider-license').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter1"><span class="current1"></span><span class="total1"></span></div>');
    $('.current1').text(slick.currentSlide + 1); 
     $('.total1').text('/ ' +slick.slideCount); 
  })
  .slick({
  arrows: true, 
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  infinite: true,
  speed: 500,
  fade: false,
  adaptiveHeight: true,
  cssEase: 'linear',   
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current1').text(nextSlide + 1);
  });  

// button click-more 
// $('.click-more').click(function () {
// 	$('.body-block').toggle('show'); 
// });
});
( function() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
} )();