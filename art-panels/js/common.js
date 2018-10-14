$(function() {

// Menu button collapse
 $('.menu_togle').click(function () {
        $('body').toggleClass('menu_opened');
        return false;
    });
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 0 }, 500);
        }
        $('body').toggleClass('menu_opened');
        return false;
    });
// header slick slider
$('.header-slider').slick({
	dots: true,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: false
});
// icos slider under header
$('.icos-slide').slick({
	dots: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	infinite: false
});
// collections slider
$('.collection').slick({
	dots: true,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	infinite: false
});
$('.collection').slick('setPosition');
$('.collection').resize();
$('.collection').slick("reinit"); 
// tabs 
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});   
$(document).ready(function() {
    $('.s5 .collection ul.slick-dots:first').each(function() {
        $(this).parent().prev().append(this);
    });
});
// timer
$('#clock-1').timeTo(86300);
/* popups */
 var gal = $('.gallery_container');
gal.on('click', '.order', function () {
    $('#order').addClass('opened');
    return false;
});

$('#catalog .open_add_new').click(function () {
    $('#order').addClass('opened');
    return false;
});

$('body').on('click', '.open_popup', function () {
    var popup_id = $(this).attr('href');
    $(popup_id+'.popup').addClass('opened');
    return false;
});

$('.popup span.close,.popup span.new_close').click(function () {
    $(this).parent().parent().removeClass('opened');
    return false;
});
/* /popups */

});