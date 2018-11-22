$(function() {
// card-slider-img
$('.appart-row').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true, 
  prevArrow: '<div class="left-arrow"></div>',
  nextArrow: '<div class="right-arrow"></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// packet-slide
$('.packet-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true, 
  dots: true,
  prevArrow: '<div class="left-arrow"></div>',
  nextArrow: '<div class="right-arrow"></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slide-main-pic
$('.slide-main-pic').each(function(key, item) {

  var sliderIdName = 'slider' + key;
  var sliderNavIdName = 'sliderNav' + key;

  this.id = sliderIdName;
  $('.slide-nav-pic')[key].id = sliderNavIdName;

  var sliderId = '#' + sliderIdName;
  var sliderNavId = '#' + sliderNavIdName;

  $(sliderId).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNavId
  });

  $(sliderNavId).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderId,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

}); 
});
// 
$( ".menu-btn" ).on( "click", function() { 
	$("header ul.menu").toggle();
}); 
// youtube-player lazy load
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
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
}); 
});