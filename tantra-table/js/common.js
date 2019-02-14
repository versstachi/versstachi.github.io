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
$('.countdown').timeTo({
    seconds: 176400,
    displayDays: 2,
    theme: "black",
    displayCaptions: false,
    fontSize: 48,
    captionSize: 14
}); 
});