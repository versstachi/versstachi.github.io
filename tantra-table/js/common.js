$(function() {
jQuery(function($){
	$('.table').footable();
});
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
}); 
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
}) 
 $(function(){
$('.countdown').countdowntimer({
    hours : 48,
    minutes :0,
    seconds : 0,
    size : "lg", 
});
});

$(document).ready(function(){
    $(window).scroll(function(){
        $('.packet-card').each(function(){
            if( $(this).offset().top<$(window).scrollTop()+600){ 
                $(this).addClass('active');
            }
            else{ 
            }
        });
    });
});
});