jQuery(function() {

  jQuery(".box-pack").slick({
    dots: false,
    arrows: true,
    infinite: true, 
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
    responsive: [ 
      {
        breakpoint: 768,
        settings: {
           dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
         centerMode: false,
        }
      } ,
      {
        breakpoint: 450,
        settings: {
           dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
         centerMode: false,
        }
      } 
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });   
  jQuery(".head-slider").slick({
    dots: false,
    arrows: true,
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
    responsive: [ 
      {
        breakpoint: 768,
        settings: {
           dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
         centerMode: false,
        }
      } 
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
  jQuery('.logo-slide-ukr').slick({ 
	prevNext: true,
	arrows: true,
	dots: false,
    rows: 2,
    slidesToShow: 4,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          rows: 1,
          slidesToShow: 1
        }
      }
    ]
  });
  jQuery('.logo-slide-other').slick({ 
	prevNext: true,
	arrows: true,
	dots: false,
    rows: 2,
    slidesToShow: 4,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          rows: 1,
          slidesToShow: 1
        }
      }
    ]
  });
  jQuery('.map-slide').slick({ 
	prevNext: true,
	arrows: true,
	dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 550,
        settings: { 
          slidesToShow: 1
        }
      }
    ]
  });
  jQuery('.sertificare-carusel').slick({ 
  prevNext: true,
  arrows: true,
  dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 550,
        settings: { 
          slidesToShow: 1
        }
      }
    ]
  });
  jQuery('.youtube-slider').slick({ 
	prevNext: true,
	arrows: true,
	dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="nav-prev icon-chevron-left"><div class="icos-sprite-left-arrow"></div></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><div class="icos-sprite-right-arrow"></div></span>',
  });

 jQuery('ul.tabs').on('toggled', function (event, tab) {
jQuery('.logo-slide-other').slick('setPosition', 0);
});
 // Check empty container 
jQuery('.product-spoiler-info').each(function(){
    if(!this.firstChild){
        jQuery(this).parent().prev().find('.product-buttons button.spoiler-button').rmove();           
    }           
})
// Background image
var link = jQuery(".img-bcg img").attr("src");
jQuery(".check-bg").css('background-image', 'url(' + link + ')'); 
var link = jQuery(".img-bcg-l img").attr("src");
jQuery(".archive .product-block.bcg-l:before").css('background', 'url(' + link + ')'); 
var link = jQuery(".img-bcg-r img").attr("src");
jQuery(".archive .product-block.bcg-r:after").css('background', 'url(' + link + ')'); 
 // table catalog
 jQuery(function(jQuery){
	jQuery('.table-season').footable();
});
 // cart panel 
jQuery(".spoiler-button").click(function(){
 jQuery(this).parent().parent().next(".product-spoiler-info-row").find(".product-spoiler-info").toggle('show');
});
 // menu collapse
 jQuery('.menu-btn').click(function(){
 jQuery('.menu-row').toggle('fade');
 jQuery('header nav').toggleClass("highlight");
 jQuery('.menu-ico').toggleClass("menu-ico-close");
}); 
 document.addEventListener( 'wpcf7mailsent', function( event ) {
  jQuery('.modal').modal('hide');
  jQuery('#modal-2').modal('show');
}, false );
 // colapse sotrud
 jQuery('[role=button]').click(function(){ 
 jQuery(this).parent().toggleClass('open'); 
});
 // equalHeights
jQuery('.sotrud .sitrud-b-3 h3').equalHeights();
// phone mask 

jQuery("input[type=tel]").mask("+380(99) 999-9999");
jQuery("input[type=tel]").intlTelInput({
    utilsScript:'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/10.0.2/js/utils.js',
    defaultCountry: 'auto',
    preferredCountries: ['ua']
});  
 var telInput = jQuery("input[type=tel]"),
  errorMsg = jQuery("#error-msg"),
  validMsg = jQuery("#valid-msg");

// инициализация плагина
telInput.intlTelInput({
utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/10.0.2/js/utils.js"
});

// валидация при потере фокуса
telInput.blur(function() {
  if (jQuery.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
      validMsg.addClass("hide");
    }
  }
});

// сброс при нажатии на клавишу
telInput.keydown(function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
});
//Parallax 
jQuery(window).scroll(function(e){
  parallax();
});

//PARALLAX FUNCTION
function parallax(){
  var scrolled = jQuery(window).scrollTop();
  jQuery('.s-2').css('top',-(scrolled*0.1)+'px');
  jQuery('.s-7').css('top',-(scrolled*0.1)+'px');
}
// menu scroll
 jQuery(document).ready(function(){
        
        var $menu = jQuery("#menu");
            
        jQuery(window).scroll(function(){
            if ( jQuery(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    jQuery(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if(jQuery(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    jQuery(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });//scroll
        
        $menu.hover(
            function(){
                if( jQuery(this).hasClass('fixed') ){
                    jQuery(this).removeClass('transbg');
                }
            },
            function(){
                if( jQuery(this).hasClass('fixed') ){
                    jQuery(this).addClass('transbg');
                }
            });//hover
    });//jQuery
});
// youtube lazzy load
( function() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "img/youtube-bg.png";
		
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