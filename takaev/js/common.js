$(function() {

  $('.slider-box').slick({
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
  }); 

});