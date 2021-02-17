$(function() {
  $(".humb").on('click', function(){
    $(".menu-mobile .menu").toggle('show');
  } );

  $(".add-to-cart-ingridients").on('click', function(){
    $(".select-pizza-add-ingripients-block").toggle('show');
  } );
  
  $('a.action-btn[href^="#"]').click(function(){
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
  return false; 
  });  
//   $(document).ready(function () {  
// $('#registration-link').tab('show');  
//   });

$(window).scroll(function() {
var height = $(window).scrollTop();
 /*Если сделали скролл на 100px задаём новый класс для header*/
if(height > 0){
$('.main-menu-fixed-header').addClass('mobile-header-fixed');
} else{
/*Если меньше 100px удаляем класс для header*/
$('.main-menu-fixed-header').removeClass('mobile-header-fixed');
}
});
  
$('.main-header-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '18%',
    nextArrow: $('.right-arrow-main-slider'),
    prevArrow: $('.left-arrow-main-slider'),
    responsive: [{
        breakpoint: 1599,
        settings: {
          infinite: true,
          speed: 900, 
          adaptiveHeight: false,
          slidesToScroll: 1, 
          focusOnSelect: true,  
          slidesToShow: 1,
          slidesToScroll: 1, 
          centerMode: true,
          centerPadding: '20%',
          dots: false,
        } 
      },{
        breakpoint: 1199,
        settings: {
          infinite: true,
          speed: 900, 
          adaptiveHeight: false,
          slidesToScroll: 1, 
          focusOnSelect: true,  
          slidesToShow: 1,
          slidesToScroll: 1, 
          dots: false,
        } 
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
           arrows: false ,
        } 
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
           arrows: false ,
          centerMode: true,
          centerPadding: '10%',
        } 
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
           arrows: false ,
          centerMode: true,
          centerPadding: '5%',
          // centerMode: true,
          // centerPadding: '60px',
        } 
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
$('.add-ingrodient-slider').slick({
    dots: false,
    slidesToShow: 3,
    arrows: true,
    infinite: false, 
    responsive: [{
        breakpoint: 1199,
        settings: {
          speed: 900, 
          adaptiveHeight: false,
          slidesToScroll: 1, 
          focusOnSelect: true,  
          slidesToShow: 3,
          slidesToScroll: 1, 
          dots: true,
        arrows: true,
        } 
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          dots: false,
        arrows: true,
        } 
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: true,
        arrows: true,
        } 
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: true,
          arrows: true,
          // centerMode: true,
          // centerPadding: '60px',
        } 
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
 $('.cart-list-item-slider').slick({
    dots: false,
    slidesToShow: 8,
    arrows: true,
    infinite: false,
    // nextArrow: $('.right-arrow'),
    // prevArrow: $('.left-arrow'),
    responsive: [{
        breakpoint: 1299,
        settings: {
          speed: 900, 
          adaptiveHeight: false,
          slidesToScroll: 1, 
          focusOnSelect: true,  
          slidesToShow: 6, 
          dots: false,
        } 
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1, 
          dots: false,
        } 
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1, 
          dots: false,
        } 
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          dots: false,
          // centerMode: true,
          // centerPadding: '60px',
        } 
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 



  $('.add-to-cart-btn').on('click', function () {  
$('.add-ingrodient-slider').slick("setPosition", 0);
  });
$('.modal-add-to-cart').on('shown.bs.modal', function (e) {
    $('.add-ingrodient-slider').slick("setPosition", 0);
});
// media query ------------------------


if ($(window).width() < 767) { 
  $('.collapse-btn').on('click', function(){
    $(this).next('.collapse-target').toggle();
    $(this).find('.icon-collapse').toggleClass('active');
  });
} else{

 $('.cart-list-slider-checkout').slick({
    dots: true, 
    arrows: true,
    // infinite: false,
    // nextArrow: $('.right-arrow'),
    // prevArrow: $('.left-arrow'),
    slidesPerRow: 1,
          slidesToScroll: 1, 
    rows: 3,
    responsive: [{
        breakpoint: 1299,
        settings: {
          speed: 900, 
          adaptiveHeight: false, 
          focusOnSelect: true,   
          slidesToScroll: 1, 
          dots: true,
        } 
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          dots: true,
        } 
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToScroll: 1, 
          dots: true,
        } 
      },
      {
        breakpoint: 450,
        settings: { 
          slidesToScroll: 1, 
          dots: true,
          // centerMode: true,
          // centerPadding: '60px',
        } 
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 

 $('.cart-list-slider-bluda').slick({
    dots: false,
    slidesToShow: 3,
    arrows: true,
    // infinite: false,
    // nextArrow: $('.right-arrow'),
    // prevArrow: $('.left-arrow'),
    responsive: [{
        breakpoint: 1299,
        settings: {
          speed: 900, 
          adaptiveHeight: false, 
          focusOnSelect: true,  
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: false,
        } 
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          dots: false,
        } 
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: false,
        } 
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          dots: false,
          // centerMode: true,
          // centerPadding: '60px',
        } 
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 

 $('.cart-list-slider-drink').slick({
    dots: false,
    slidesToShow: 3,
    arrows: true,
    // infinite: false,
    // nextArrow: $('.right-arrow'),
    // prevArrow: $('.left-arrow'),
    responsive: [{
        breakpoint: 1299,
        settings: {
          speed: 900, 
          adaptiveHeight: false, 
          focusOnSelect: true,  
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: false,
        } 
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          dots: false,
        } 
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          dots: false,
        } 
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          dots: false,
          // centerMode: true,
          // centerPadding: '60px',
        } 
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 

}

// quantity Products------------------
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })()
  
  }); 

// range - slide
var slider = document.getElementById("slideRange");
var output = document.getElementById("range_count");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}