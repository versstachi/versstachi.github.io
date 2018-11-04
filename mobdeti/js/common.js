$(function() {

 // menu collapse
 $('.menu-btn').click(function(){
 $('.menu-row').toggle('fade');
 $('header nav').toggleClass("highlight");
 $(this).toggleClass("menu-ico-close");
});  
  
$('.block-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  dotsClass: "block-slide-dots circle spin"
  }); 
 $(".row-slider .block-slide-dots.circle li").append('<svg class="progress" width="30" height="30" viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" fill="none" stroke="rgba(0,0,0, 0)" stroke-width="2" /><circle class="progress__value" cx="60" cy="60" r="54" fill="none" stroke="#fff" stroke-width="2" /></svg>');
$(function() {
  $('.resp-slide').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter1"><span class="current1"></span> / <span class="total1"></span></div>');
    $('.current1').text(slick.currentSlide + 1);
    $('.total1').text(slick.slideCount);
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
	fade: true,
	adaptiveHeight: true,
	cssEase: 'linear'
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current1').text(nextSlide + 1);
  });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// menu scrol 
$('.go_anch').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false;  
	$('.menu-row').toggle('fade');
	$('header nav').toggleClass("highlight");
	$('button.menu-btn').toggleClass("menu-ico-close");
    return false;
});  
});