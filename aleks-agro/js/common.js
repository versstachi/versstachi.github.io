$(function() {
$('.license-box').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3, 
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.gallery-box').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true, 
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false, 
        slidesToShow: 1
      }
    }
  ]
});
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
}); 
});

if ($(window).width() < 1200) {
  $(".menu-col").appendTo(".menu-mobile-row");
$('.menu-hum').click(function(){
  $('.menu-col ').toggle("show");
});
} 
else { 
$('.menu-hum').click(function(){
  $('.main-menu').toggle("show");
});
}
});