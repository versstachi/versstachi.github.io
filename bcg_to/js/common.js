$(function() {  

    $('input:radio[name=view]').change(function() {
        if (this.value == 'useron') {  
    	$("body").find(".change-color").removeClass("blue-col yel-col").addClass("green-col");
        $('input:radio[name=view]').removeClass("green-col blue-col yel-col");
        // $(this).next().addClass("green-col");
        // $(this).parent().addClass("green-col");
        $('input:radio[name=view]').parent().find('.switch-label-on, .switch-label-off, .switch-selection').removeClass("green-col blue-col yel-col");
        $(this).parent().find('.switch-label-on, .switch-label-off, .switch-selection').addClass("green-col");
        $('#button-blue-col').hide();
        $('#button-yel-col').hide();
        $('#button-green-col').show();
        }
        else if (this.value == 'partneron') {
    	$("body").find(".change-color").removeClass("green-col yel-col").addClass("blue-col");
        $('input:radio[name=view]').removeClass("green-col blue-col yel-col");
        // $(this).next().addClass("blue-col");
        // $(this).parent().addClass("blue-col");
        $('input:radio[name=view]').parent().find('.switch-label-on, .switch-label-off, .switch-selection').removeClass("green-col blue-col yel-col");
        $(this).parent().find('.switch-label-on, .switch-label-off, .switch-selection').addClass("blue-col");
        $('#button-green-col').hide();
        $('#button-yel-col').hide();
        $('#button-blue-col').show();
        }
        else if (this.value == 'bizneson') {
    	$("body").find(".change-color").removeClass("green-col blue-col").addClass("yel-col");
        $('input:radio[name=view]').removeClass("green-col blue-col yel-col"); 
        $('input:radio[name=view]').parent().find('.switch-label-on, .switch-label-off, .switch-selection').removeClass("green-col blue-col yel-col");
        $(this).parent().find('.switch-label-on, .switch-label-off, .switch-selection').addClass("yel-col");
        $('#button-blue-col').hide();
        $('#button-green-col').hide();
        $('#button-yel-col').show();
        }
    });
    $('.munu-box').click(function () {
        event.preventDefault();
        $('ul.menu').toggle('show');
    });
    
    $('.partners-row').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
      nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }, 
        {
          breakpoint: 991,
          settings: { 
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },  
        {
          breakpoint: 767,
          settings: {
            // slidesPerRow: 1,
            // rows: 3,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            // slidesPerRow: 1,
            // rows: 3,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        } 
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.popular-slide').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="left-arrow"><span class="nav-prev"></span></div>',
      nextArrow: '<div class="right-arrow"><span class="nav-next"></span></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }, 
        {
          breakpoint: 991,
          settings: { 
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },  
        {
          breakpoint: 767,
          settings: {
            // slidesPerRow: 1,
            // rows: 3,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            // slidesPerRow: 1,
            // rows: 3,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        } 
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $(function() {
  $('.row-slider').on('init', function(event, slick) { 
    $('.controls').append('<div class="slick-counter2"><span class="current2"></span> / <span class="total2"></span></div>'); 
    $('.current2').text(slick.currentSlide + 1);
    $('.total2').text(slick.slideCount);
  })
  .slick({
  arrows: true,
  dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.left-arrow'),
    nextArrow: $('.right-arrow'),
  infinite: false,
  speed: 500,
  fade: false,
  adaptiveHeight: true,
  cssEase: 'linear'
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current2').text(nextSlide + 1);
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
