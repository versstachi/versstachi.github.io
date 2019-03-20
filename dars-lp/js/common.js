$(function() {

  $('.s-1-slider').on('init', function(event, slick) {
    $('.arrow-box').append('<div class="slick-counter1"><span class="mob-block"><span class="heads">ШАГ</span><span class="current1"></span></span><span class="total1"> / 0</span></div>');
    $('.current1 ').append(slick.currentSlide + 1); 
    $('.total1').append(slick.slideCount);
  })
  .slick({
  arrows: true,
  dots: false,
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
    $('.current1').text(nextSlide + 1);
  }); 

$('.s-1 .left-arrow span, .s-1 .left-arrow ').click(function(){
  $('.s-1-slider').slick('slickPrev');
});

$('.s-1 .right-arrow span, .s-1 .right-arrow').click(function(){
  $('.s-1-slider').slick('slickNext');
});

});