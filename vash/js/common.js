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
});
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
var span = document.getElementById("timecounterdiv");
var span2 = document.getElementById("asd2");
 
var CountdownTimer = function(endTime, onTick, onEnd){
  
  var loop = function(){
    var currentDate = new Date();
 
    var dif = new Date(endTime - currentDate + 1000);
    dif.setMinutes(dif.getMinutes() + currentDate.getTimezoneOffset());
 
    onTick(dif);
 
    if(currentDate > endTime){
      onEnd();
      return;
    }
 
    requestAnimationFrame(loop);
  };
  
  this.start = loop;
};
 
var updateElement = function(time){
  var addZero = function(value){
    return value < 10 ? "0" + value : value;
  };
  var seconds = addZero(time.getSeconds());
  var hours = addZero(time.getHours());
  var minutes = addZero(time.getMinutes());
  var date = addZero(time.getDate());
  
  span.innerHTML = " <span> "+date +" <i>дней</i></span>: "+ " <span> "+hours+" <i>часов</i> </span>: "+" <span> "+minutes+" <i>минут</i> </span>: "+" <span> "+seconds+" <i>секунд</i></span> ";
};
 
var onEndFirstTimer = function(){
  span2.innerText = "Время Акции истекло" // показываешь надпись
  
  
  setTimeout(function(){
    var endTime = new Date();
		endTime.setDate(endTime.getDate() + 0);
    endTime.setHours(endTime.getHours() + 0);
    endTime.setSeconds(endTime.getSeconds() + 55); // таймер на 1 час 55 минут
    var timer = new CountdownTimer(endTime, updateElement, onEndFirstTimer);
    timer.start();
    
    
    span2.innerText = "" // убираешь надпись
  }, 5 * 60 * 1000); // setTimeout на 5 минут
};
 
var endTime = new Date();
endTime.setDate(endTime.getDate() + 0);
endTime.setHours(endTime.getHours() + 1); // таймер на два часа
var timer = new CountdownTimer(endTime, updateElement, onEndFirstTimer);
timer.start();