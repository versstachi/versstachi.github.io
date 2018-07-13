$(function() {
$("#p1").load("../kvorum/price.html #p1");
$("#p2").load("../kvorum/price.html #p2");
$("#p3").load("../kvorum/price.html #p3");
$("#p4").load("../kvorum/price.html #p4");
$("#p5").load("../kvorum/price.html #p5");
$("#p6").load("../kvorum/price.html #p6");
	// Пользовательские функции
$('.prod-descrip').equalHeights(); 
$('.prod-header').equalHeights();
$('.acc-col .decr').equalHeights(); 
$( ".more-tex" ).click(function() {
	event.preventDefault();
  $(this).prev( ".descrip" ).toggleClass( "more-look" );
});
$('.more-tex').click(function(){
	$('.descr').toggle('show');
});
$('.close-bar').click(function(){
	$('#menu ul').toggle('show');
});
});

$(document).ready(function(){
    
    var $menu = $("#menu");
        
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                       .addClass("fixed transbg")
                       .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                       .addClass("default")
                       .fadeIn('fast');
            });
        }
    });//scroll
    
    $menu.hover(
        function(){
            if( $(this).hasClass('fixed') ){
                $(this).removeClass('transbg');
            }
        },
        function(){
            if( $(this).hasClass('fixed') ){
                $(this).addClass('transbg');
            }
        });//hover
$('.logos-row').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
  		 }
      },,
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
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
$('.r-15 .vaks').slick({
  infinite: true,
  arrows: false, 
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$('.multiple-items').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
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
$("input[type=tel]").mask("+38(999) 999-9999");
});//jQuery
$.fn.ready(function() {
    // Spoiler
    $(document).on('click', '.spoiler-btn', function (e) {
        e.preventDefault()
        $(this).parent().children('.spoiler-body').collapse('toggle')
        $(this).parent().parent().children('.descrip').toggleClass('all')
    });
});
$(function(){
$('.menu a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
}); 
});