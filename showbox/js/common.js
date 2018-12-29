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
	fade: false,
	adaptiveHeight: true,
	cssEase: 'linear'
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current2').text(nextSlide + 1);
  });

  $('.lis-pic').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter2">0<span class="current2"></span><span class="total2"></span></div>');
    $('.current2').text(slick.currentSlide + 1); 
  })
  .slick({
  arrows: true, 
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  infinite: false,
  speed: 500,
  fade: false,
  adaptiveHeight: true,
  cssEase: 'linear'
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current2').text(nextSlide + 1);
  });
//   $('.resp-block').slick({
//   arrows: true,
//   centerMode: true,
//   infinite: true,
//   centerPadding: '250px',
//   slidesToShow: 1,
//   prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
//   nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
//   speed: 500,
//   dots: true,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '200px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '10px',
//         slidesToShow: 1
//       }
//     },
//     ]
// });
  $('.product-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  fade: true,
  prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
  nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  asNavFor: '.product-slide-nav'
});
$('.product-slide-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-slide',
  arrows: true,
  infinite: true,
  prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
  nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  dots: false, 
}); 
$('.s-2 .prod-cart .button-block').click(function(){
$('.modal').on('shown.bs.modal', function (e) {  
    $('.product-slide').slick("setPosition", 0);
    $('.product-slide-nav').slick("setPosition", 0); 
});
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
  $('.menu-close').toggleClass('open');
});

$(".teleph").mask("+7 (999) 999-99-999");
if ($(window).width() < 767) { 
  $('.gall-block').slick({
  arrows: true, 
  infinite: true, 
  slidesToShow: 1,
  prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
  nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
  speed: 500,
  dots: true, 
});
$('header ul.menu a').click(function(){
  $('ul#menu').toggle('show');
});
}
else { 
}
});