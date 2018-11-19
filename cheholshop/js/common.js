$(function() {
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
$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});
$('input[type=tel]').mask("+38(999)999-99-99");
$('.slick-sl').slick({
  dots: false,
  arowws: false,
  infinite: true,
  speed: 200, 
  autoplay: true,
  autoplaySpeed: 2000,
});
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.s-2 .cart h4').css('height', '').equalHeights();

});
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);// 
return false; 
}); 
$(".nav-pills li a").click(function (e) {   
    $("#menu").css("display","none");
});
});

$(".more").click(function (e) { 
   var con = $(this).find('.cart-panel h4').text();
    $('#myModal-cart').modal();
    $('.cont-text h3').append(con);
});
$('.spoiler-block button.spoiler-butt').click(function(){
  $(this).next('.spoiler-cont').toggle('show');
}); 

$('.5 .cart-panel .cart').each(function(e){
  e +=1;
  con =  '#myModal-about-5-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con).attr('data-target', con);
$(this).after('<div id="myModal-about-5-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>' + item_version + '</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Силиконовый чехол Apple плотно прилегает к кнопкам управления громкостью и режима сна. Он точно повторяет контуры iPhone 5/5s/se/6/6s/6+ благодаря чему телефон сохраняет свой тонкий профиль. Мягкая внутренняя поверхность чехла, выполненная из микроволокна, защитит корпус вашего iPhone. А его внешняя бархатная силиконовая поверхность очень приятна на ощупь.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.7 .cart-panel .cart').each(function(e){
  e +=1;
  con =  '#myModal-about-7-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con).attr('data-target', con);
$(this).after('<div id="myModal-about-7-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>' + item_version + '</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Силиконовый чехол Apple плотно прилегает к кнопкам управления громкостью и режима сна. Он точно повторяет контуры iPhone 7/ iPhone 8, благодаря чему телефон сохраняет свой тонкий профиль. Мягкая внутренняя поверхность чехла, выполненная из микроволокна, защитит корпус вашего iPhone. А его внешняя бархатная силиконовая поверхность очень приятна на ощупь.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.7plus .cart-panel .cart').each(function(e){
  e +=1;
  con =  '#myModal-about-7plus-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-7plus-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>' + item_version + '</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Силиконовый чехол Apple плотно прилегает к кнопкам управления громкостью и режима сна. Он точно повторяет контуры iPhone 7+/ iPhone 8+, благодаря чему телефон сохраняет свой тонкий профиль. Мягкая внутренняя поверхность чехла, выполненная из микроволокна, защитит корпус вашего iPhone. А его внешняя бархатная силиконовая поверхность очень приятна на ощупь.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.x .cart-panel .cart').each(function(e){
  e +=1;
  con =  '#myModal-about-x-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-x-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>' + item_version + '</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Силиконовый чехол Apple плотно прилегает к кнопкам управления громкостью и режима сна. Он точно повторяет контуры iPhone X благодаря чему телефон сохраняет свой тонкий профиль. Мягкая внутренняя поверхность чехла, выполненная из микроволокна, защитит корпус вашего iPhone. А его внешняя бархатная силиконовая поверхность очень приятна на ощупь.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.recharg .cart-panel .cart.AppleCharger1A').each(function(e){
  e +=1;
  con =  '#myModal-about-AppleCharger1A-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-AppleCharger1A-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>iPhone 3G/3GS, 4/4S, 5 \
iPod touch 1st generation/2nd generation/3rd generation/4th generation/5th generation \
iPod classic 120GB/160GB (2009) iPod shuffle 3rd generation/4th generation \
iPod mini \
iPod 4th generation/4th generation (color display)/5th generation (video) \
iPad mini\
</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Apple USB — универсальное зарядное устройство, при помощи которого можно подзаряжать модели iPhone, iPad, iPad mini или iPod от сети 220В. Зарядка имеет один USB-порт для подключения внешнего устройства с помощью оригинального USB-кабеля.\
Apple USB — удобное и надежное устройство, выполненное из белого ударопрочного пластика. Повышенное качество материала корпуса заметно даже невооруженным взглядом. А технологичная начинка устройства обеспечит быструю и эффективную зарядку вашего девайса.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.recharg .cart-panel .cart.AppleCharger2').each(function(e){
  e +=1;
  con =  '#myModal-about-AppleCharger2-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-AppleCharger2-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>iPhone, iPhone 3G/3GS/4/4G/5s/5c; - iPod Touch I-V поколения; - iPod classic 120GB/160GB (2009), 160GB (2007), 80GB; - iPod nano I-VII поколения; - iPod shuffle II-IV поколения; - iPod mini/iPad mini Retina; - iPod V поколения (video) 30GB/60GB/80GB; - iPod IV поколения (video) 20GB/30GB/60GB/80GB; - iPod IV поколения (color display); - iPod IV поколения 20GB/40GB; - iPad I-IV поколения; - iPad 1/2/3/4.</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Apple 1хUSB — универсальное зарядное устройство, при помощи которого можно подзаряжать модели iPhone, iPad, iPod, iPod mini/iPad mini Retina и т.д. с разъёмом Lightning от сети. Зарядка имеет один USB-порт для подключения внешнего устройства с помощью Lighting-кабеля. Apple 1хUSB — удобное и ударопрочное устройство, выполненное из крепкого белого пластика. </p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.recharg .cart-panel .cart.applelightning').each(function(e){
  e +=1;
  con =  '#myModal-about-applelightning-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-applelightning-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong> iPhone 5, iPod touch 5G, iPod nano 7G, iPad mini, iPad 4G</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Apple Lightning to USB Cable представляет собой высококачественный кабель-переходник от Apple, предназначенный для синхронизации и зарядки новых моделей гаджетов. С одной стороны кабель подключается непосредственно к ним, с другой - к USB-порту компьютера или какого-либо зарядного устройства.\
Совместимость: iPhone 5, iPod touch 5G, iPod nano 7G, iPad mini, iPad 4G\
</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.earhphone .cart-panel .cart.AirPods').each(function(e){
  e +=1;
  con =  '#myModal-about-AirPods-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-AirPods-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>' + item_version + '</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>Apple EarPods — самые удобные наушники-вкладыши, когда либо созданные. Динамик внутри EarPods был специально спроектирован для того, чтобы уменьшить потери качества звука и максимально увеличить громкость исходящего звукового потока.Таким образом вы получаете звук высокого качества, сопоставимый с более дорогими наушниками. Кнопки управления позволяют вам управлять телефоном либо плеером без нужды доставать его из кармана или сумки. Кнопки управления отвечают за регулировку звука, контроль воспроизведение музыки и видео с помощью центральной кнопки.\
Также Apple EarPods with Remote and Mic служат отличной мобильной гарнитурой благодаря встроенному микрофону.\
</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.earhphone .cart-panel .cart.AirPodswireless').each(function(e){
  e +=1;
  con =  '#myModal-about-AirPodswireless-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-AirPodswireless-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>' + item_version + '</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>AirPods меняют подход к использованию наушников. Когда вы достаете AirPods из чехла, они сразу подключаются к iPhone, Apple Watch, iPad или Mac. Воспроизведение аудио начинается автоматически, как только вы их надеваете, — и приостанавливается, когда вы их снимаете. Дважды коснитесь наушника, чтобы активировать Siri, с помощью которой можно изменить громкость, позвонить или даже проложить маршрут. AirPods с зарядным чехлом: более 24 часов воспроизведения, до 11 часов в режиме разговора. AirPods без подзарядки: до 5 часов воспроизведения, до 2 часов в режиме разговора.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
$('.glass .cart-panel .cart.glasses').each(function(e){
  e +=1;
  con =  '#myModal-about-glass-' + e;
  var img_url = $(this).find('.img').html(); 
  item_name = $(this).find('h4').text();
  item_version = $(this).find('h4 span').text();
  item_oldprice = $(this).find('.old-price strike').text();
  item_newprice = $(this).find('.newprice strong').text();
  item_butts = $(this).find('button.more').attr('data-target', con);
$(this).after('<div id="myModal-about-glass-' + e + '" class="modal fade inf-card" role="dialog" >\
  <div class="modal-dialog ">\
    <div class="modal-content">\
      <div class="modal-header text-center"><button type="button" class="close" data-dismiss="modal">&times;</button></div> \
      <div class="modal-body">\
        <div class="row cont">\
        <div class="col-sm-5 slide-pic">\
 <div class="slider-for ">' + img_url + '</div>\
 <div class="slider-nav ">' + img_url + '</div>\
 </div>\
        <div class="col-sm-6 col-sm-offset-1 cont-text">\
          <h3>' + item_name + '</h3>\
          <p class="inf-serv"><span><i class="fa fa-check" aria-hidden="true"></i>В наличии</span></p>\
          <p class="inf-serv">\
            <span><i class="medal"></i>Гарантия качества</span>\
            <span><i class="fa fa-refresh" aria-hidden="true"></i>Возврат/Обмен 14 дней</span></p>\
          <p class="model">Модель: <strong>на любую модель iPhone 6/6s/6s+/6+/7/7+/8+/X</strong></p>\
          <p class="price"><span class="old-price">Старая цена: <strike>' + item_oldprice + '</strike></span><span class="now-price">Цена сегодня: <strong>' + item_newprice + '</strong></span></p>\
          <p class="descrip-inf"><span>Описание:</span>: Защитное стекло 5D для iPhone представляет собой специальное покрытие для дисплея iPhone, выполненное из специального стекла, которое самым надежным способом защитит дисплей вашего карманного коммуникатора не только от загрязнения, но и от царапин, сколов и потертостей.\
          5D Full Cover для iPhone плотно прилегает к экрану, полностью покрывая его, обеспечивая тем самым полную защиту, легко наносится и удаляется, не оставляя при этом следов.</p>\
          <button class="yel" data-toggle="modal" data-target="#myModal-cheh"  type="button" class="close" data-dismiss="modal">Купить</button>\
        </div></div>\
      </div>\
      <div class="modal-footer"></div></div></div></div>');
});
