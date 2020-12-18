    $(document).ready(function(){
        
        var $menu = $("#menu1");
            
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
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  dots: false,
  arrows: false,
});
$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});
$(".nav-pills li a").click(function (e) {   
    $("#menu").css("display","none");
});
    });//jQuery 
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
});  
$("input[type=tel]").mask("+38(999) 999-9999");
    $('.spoiler-text').hide();
    $('.spoiler-toggle').click(function(){
        $(this).next().animate({height: 'toggle'});
        if ($(this).html() == '<p class="text-center wow fadeInUp"><button class="blue-bg" >Смотреть больше</button></p>'){
            $(this).html('<p class="text-center wow fadeInUp"><button class="blue-bg" >Смотреть больше</button></p>');
        }
        else{
            $(this).html('<p class="text-center wow fadeInUp"><button class="blue-bg" >Смотреть больше</button></p>');
    }
    }); // end spoiler-toggle
});