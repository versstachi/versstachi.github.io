$(function() { 
$('.slider-exemple').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-left-arrow"> <span class="glyphicon glyphicon-chevron-left"></span></div>',
  nextArrow: '<div class="slider-right-arrow"> <span class="glyphicon glyphicon-chevron-right"></span></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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
 $('.s-projj .nav-pills > li > a').on('shown.bs.tab', function(e) {
     e.target
     e.relatedTarget
     $('.slider-exemple').slick('setPosition');
 });
if ($(window).width() < 1200) {
  $(".menu").appendTo(".menu-mobile-row");
$('.menu-hum').click(function(){
  $('.menu ').toggle("show");
});
} 
else { 
$('.menu-hum').click(function(){
  $('.menu').toggle("show");
});
}
});