
$(function() {

 $('.s-4-slider-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  prevArrow: '<div class="left-arrow"><span class="nav-prev">&lsaquo;</span></div>',
  nextArrow: '<div class="right-arrow"><span class="nav-next">&rsaquo;</span></div>',
  asNavFor: '.s-4-slider-nav'
});
$('.s-4-slider-nav').slick({
  slidesToShow: 5, 
  slidesToScroll: 1, 
  asNavFor: '.s-4-slider-box',  
  dots: true,
  centerMode: true, 
  focusOnSelect: true,
  responsive: [ 
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
		centerMode: false,
		centerPadding: '50px',
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
		centerMode: false,
        slidesToScroll: 1,
		centerPadding: '100px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
		centerMode: false,
        slidesToScroll: 1,
		centerPadding: '30px',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 $('.s-6-slider-vids').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
   infinite: true,
  arrows: true,
  focusOnSelect: true,
  dots: true, 
  fade: false,
  prevArrow: '<div class="left-arrow"><span class="nav-prev">&lsaquo;</span></div>',
  nextArrow: '<div class="right-arrow"><span class="nav-next">&rsaquo;</span></div>',
  
});
 $(document).ready(function() {
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true, 
    });
});
 ( function() {

  var youtube = document.querySelectorAll( ".youtube" );
  
  for (var i = 0; i < youtube.length; i++) {
    
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
          youtube[ i ].appendChild( image );
        }( i ) );
    
        youtube[i].addEventListener( "click", function() {

          var iframe = document.createElement( "iframe" );

              iframe.setAttribute( "frameborder", "0" );
              iframe.setAttribute( "allowfullscreen", "" );
              iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

              this.innerHTML = "";
              this.appendChild( iframe );
        } );  
  };
  
} )();
});

//=================================================

// MouseParallax = function($obj, max, speed)
// {
//   var old = {x: 0, y:0};
//   var translate = {x: 0, y: 0};
//   var translate_max = max || {x: 30, y: 15};
//   var translate_speed = speed || 1/30;
//   var $translate_img = $obj;

//   $('body').mousemove(function(e) {
//     if(old.x)
//     {
//       var dx = old.x - e.clientX;
//       var tx = translate.x;
//       tx += dx*translate_speed;
//       if(tx > translate_max.x)  tx = translate_max.x;
//       if(tx < -translate_max.x) tx = -translate_max.x;
//       translate.x = tx;

//       var dy = old.y - e.clientY;
//       var ty = translate.y;
//       ty += dy*translate_speed;
//       if(ty > translate_max.y)  ty = translate_max.y;
//       if(ty < -translate_max.y) ty = -translate_max.y;
//       translate.y = ty;
//     }
//     $translate_img.css('transform', 'translate('+tx+'px,'+ty+'px)');
//     old.x = e.clientX;
//     old.y = e.clientY;
//   });
// };
// $(function() {
//   // 1 экран
//   MouseParallax( $('.s-1 img.img-right:nth-child(2)'),  {x: 50, y: 25}, 1/10);
//   // MouseParallax( $('.s-1 img.img-right:last-child') );

//   // 2 экран
//   // MouseParallax( $('.s-2 .img-box img:first-child'),  {x: 30, y: 15}, 1/30);
//   // MouseParallax( $('.s-2 .img-box img:last-child') );
//   MouseParallax( $('.s-2 img.img-left'),  {x: 50, y: 25}, 1/10);

//   // 3 экран
//   // MouseParallax( $('.s-3 .art-box'),  {x: 20, y: 10}, 1/30 );
//   // MouseParallax( $('.s-3 .art-box img'),  {x: 20, y: 10}, -1/30 );

//   // 4 экран
//   MouseParallax( $('.s-4 img.img-right'),  {x: 50, y: 25}, 1/10);
//   // MouseParallax( $('.s-4 .img-box img:first-child') );

//   // 5 экран
//   MouseParallax( $('.s-5 img.img-right'),   {x: 80, y: 45}, 1/5);
//   // MouseParallax( $('.s-5 img.img-left-1'),  {x: 80, y: 45}, 1/5);
//   // MouseParallax( $('.s-5 .img-box img:first-child') );

//   // 6 экран
//   MouseParallax( $('.s-7 img.img-right'),  {x: 50, y: 25}, 1/10);
//   // MouseParallax( $('.s-7 .img-box img:first-child') );



// });

