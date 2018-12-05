$(function() {
  $('.list-pic').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter2">0<span class="current2"></span><span class="total2"></span></div>');
    $('.current2').text(slick.currentSlide + 1); 
  })
  .slick({
 	arrows: true,
 	dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
	infinite: false,
	speed: 500,
	fade: true,
	adaptiveHeight: true,
	cssEase: 'linear'
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current2').text(nextSlide + 1);
  });
  $('.resp-block').slick({
  arrows: true,
  centerMode: true,
  infinite: true,
  centerPadding: '300px',
  slidesToShow: 1,
  prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
  nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  speed: 500,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    ]
});
$(function(){
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
		return false; 
	}); 
});
$('.menu-close').click(function(){
	$('ul#menu').toggle('show');
});
});