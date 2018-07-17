$(function() {
     // scroll
  $("#menu-link").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });  
  // авто всплывающее окно
  $('#modal-action').modal();
  // выравнивание высоты заголовков
$('.s-2 .card h3').equalHeights();
$('.s-8 .ico-cats').equalHeights();
$('.s-8 h4').equalHeights();
// иконка меню в адаптиве
$(".menu-humb").click(function(){
	$(".menu").toggle("fold");
});
$(".more-text").click(function(){
	$(this).prev().toggleClass("alls", 1000);
}); 
$(".look-more-mobile").click(function(){
	$(this).parent().prev('.ico-row').find('.ico-cats:nth-child(n+4)').toggle("fold");
});  
// timer 

});
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
