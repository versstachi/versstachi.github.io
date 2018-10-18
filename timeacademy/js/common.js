$(function() {

 // menu collapse
 $('.menu-btn').click(function(){
 $('.menu-row').toggle('fade');
 $('header nav').toggleClass("highlight");
 $(this).toggleClass("menu-ico-close");
}); 
 // slick slides
 // $('.lesson-slide').slick({
 // 	arrows: true,
 // 	dots: false,
 //    slidesToShow: 1,
 //    slidesToScroll: 1,
 //    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
 //    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
	// infinite: false,
	// adaptiveHeight: true,
	// speed: 500,
	// fade: true,
	// cssEase: 'linear'
 // });
  
$(function() {
  $('.lesson-slide').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter2"><span class="current2"></span> / <span class="total2"></span></div>');
    $('.current2').text(slick.currentSlide + 1);
    $('.total2').text(slick.slideCount);
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
    $('.current2').text(nextSlide + 1);
  });
});
 
$(function() {
  $('.faq-slide').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
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
    $('.current').text(nextSlide + 1);
  });
});
 
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