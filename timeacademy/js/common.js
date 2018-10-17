$(function() {

 // menu collapse
 $('.menu-btn').click(function(){
 $('.menu-row').toggle('fade');
 $('header nav').toggleClass("highlight");
 $(this).toggleClass("menu-ico-close");
}); 
 $('.lesson-slide').slick({
 	arrows: true,
 	dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
	infinite: false
 });
 $('.resp-slide').slick({
 	arrows: true,
 	dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
	infinite: false
 });
 $('.faq-slide').slick({
 	arrows: true,
 	dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
	infinite: false
 });
var countLi = $('.resp-slide li').size(); 
$('.resp-slide').append('<div class="count">1/' + countLi + '</div>');
var countLi = $('.faq-slide li').size(); 
$('.faq-slide').append('<div class="count">1/' + countLi + '</div>');
});