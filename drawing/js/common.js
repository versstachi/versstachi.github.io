$(function() { 
$('.resp-gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1, 
  dots: true,
  arrows: true, 
  focusOnSelect: true,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"><img src="img/left-arr.png" alt="" /></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"><img src="img/right-arr.png" alt="" /</span></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true, 
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true, 
        slidesToShow: 1
      }
    }
  ]
});
$('.slider-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1, 
  dots: true,
  arrows: true, 
  focusOnSelect: true,
    prevArrow: '<div class="left-arrow"><span class="nav-prev"><img src="img/left-arr.png" alt="" /></span></div>',
    nextArrow: '<div class="right-arrow"><span class="nav-next"><img src="img/right-arr.png" alt="" /</span></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true, 
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true, 
        slidesToShow: 1
      }
    }
  ]
});
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
}); 
});
  $('.menu-hum').on('click', function () { 
      $('.main-menu').toggle('show'); 
});
$(document).ready(function () {
$("form").submit(function () {
// Получение ID формы
var formID = $(this).attr('id');
// Добавление решётки к имени ID
var formNm = $('#' + formID);
$.ajax({
type: "POST",
url: 'mail.php',
data: formNm.serialize(),
success: function (data) {
// Вывод текста результата отправки
$(formNm).html(data);
$(".modal").modal('hide');
$("#modal-succes-form").modal('show');
},
error: function (jqXHR, text, error) {
// Вывод текста ошибки отправки
$(formNm).html(error);
}
});
return false;
});
});
// $('.open-forms').on('show', function (e) {
//   $(this).modal('toggle');
// })
$(function() {
  return $(".modal").on("show.bs.modal", function() {
    var curModal;
    curModal = this;
    $(".modal").each(function() {
      if (this !== curModal) {
        $(this).modal("hide");
      }
    });
  });
});
});