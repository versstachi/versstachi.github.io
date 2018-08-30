$(function() { 
// Slick slider - 
 $('.slick-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slick-product-nav', 
});
$('.slick-product-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-product',
  dots: false,  
  vertical: true,
  arrows: true,
  infinite: true, 
  focusOnSelect: true,
  centerPadding: '10px', 
  nextArrow: '<span class="nav-next icon-chevron-down"><i class="fas fa-chevron-down"></i></span>',
  prevArrow: '<span class="nav-prev icon-chevron-up"><i class="fas fa-chevron-up"></i></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true, 
        vertical: false,
      }
    },
    ]
});
  // Slick slider - poup 
$('.slick-product-popup').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slick-product-nav-popup', 
});
$('.slick-product-nav-popup').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-product-popup',
  dots: false,  
  vertical: true,
  arrows: true,
  infinite: true, 
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '20px', 
  nextArrow: '<span class="nav-next icon-chevron-down"><i class="fas fa-chevron-down"></i></span>',
  prevArrow: '<span class="nav-prev icon-chevron-up"><i class="fas fa-chevron-up"></i></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true, 
        vertical: false,
      }
    },
    ]
});
$('.slick-product-modal-gallery').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,   
  speed: 500, 
  cssEase: 'linear', 
  focusOnSelect: true, 
  centerPadding: '20px',  
  prevArrow: '<span class="nav-prev icon-chevron-left"><img src="img/back.svg"  alt=""></span>',
  nextArrow: '<span class="nav-next icon-chevron-right"><img src="img/next.svg"  alt=""></span>',
  responsive: [ 
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         centerMode: false,
        }
        },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         centerMode: false,
        }
        },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         centerMode: false,
        }
        },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         centerMode: false,
        }
        } 
    ]
});   
$('.slick-popup-product-pic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, 
  fade: true, 
  prevArrow: '<span class="nav-prev icon-chevron-left"><img src="img/back.svg"  alt=""></span>',
  nextArrow: '<span class="nav-next icon-chevron-right"><img src="img/next.svg"  alt=""></span>'
});
 $('.slick-popup').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slick-popup-nav',
  prevArrow: '<span class="nav-prev icon-chevron-left"><img src="img/back.svg"  alt=""></span>',
  nextArrow: '<span class="nav-next icon-chevron-right"><img src="img/next.svg"  alt=""></span>'
});
$('.slick-popup-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slick-popup',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true, 
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true, 
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    } 
  ]
}); 
  $(".center").slick({
    dots: true,
    arrows: true,
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="nav-prev icon-chevron-left"><img src="img/back.svg"  alt=""></span>',
    nextArrow: '<span class="nav-next icon-chevron-right"><img src="img/next.svg"  alt=""></span>',
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
    ]
  }); 
  $('.latest-list').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500, 
  cssEase: 'linear', 
  slidesToShow: 7,
  slidesToScroll: 1,
  prevArrow: '<span class="nav-prev icon-chevron-left"><img src="img/back.svg"  alt=""></span>',
  nextArrow: '<span class="nav-next icon-chevron-right"><img src="img/next.svg"  alt=""></span>',
  responsive: [ 
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});  
$('.product-item-pict-caruousel').each(function(){
var slickInduvidual = $(this);
slickInduvidual.slick({
nextArrow: slickInduvidual.prev().find('.nav-prev'),
prevArrow: slickInduvidual.prev().find('.nav-next'), 
});
}) 
$(".latest-list-cat").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500, 
  cssEase: 'linear', 
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<span class="nav-prev icon-chevron-left"><img src="img/back.svg"  alt=""></span>',
  nextArrow: '<span class="nav-next icon-chevron-right"><img src="img/next.svg"  alt=""></span>',
  responsive: [ 
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
         centerMode: false,
        }
        },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
         centerMode: false,
        }
        },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         centerMode: false,
        }
        },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         centerMode: false,
        }
        } 
    ]
});  
}); 
// favorite add class
$(".link-like").on("click", function () {
  $(this).toggleClass('likeit');
}); 
// chekbox
$("#myCheckbox").on("click", function () {
    check = $("#myCheckbox").prop("checked");
    if (check) {
        if ($('.myCheck i').hasClass('fa-square-o')) {
            $('.myCheck i').removeClass('fa-square-o').addClass('fa-check-square-o');
            $(".checkboxText").html('Ohh, You Did It!');
        }
    } else {
        if ($('.myCheck i').hasClass('fa-check-square-o')) {
            $('.myCheck i').removeClass('fa-check-square-o').addClass('fa-square-o');
            $(".checkboxText").html('Click Me Again!');
        }
    }
});
// equal heights
$('.catalog .product-item h3').equalHeights();
// modal gallery tabs 
$('.slick-product-modal-gallery a[href^="#"]').click(function(e) {
    e.preventDefault();
    $('.slick-product-modal-gallery a').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');  
    $('.modal-gallery').not(tab).css({'height':'0'}); 
    $(tab).css({'height':'auto'}); 
});
// Slick slider - resize
$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-product-modal-gallery').resize();
    $('.slick-product-modal-gallery-block').resize();
    $('.slick-popup').resize();
    $('.slick-popup-nav').resize();
    $('.slick-popup-product-pic').resize();
    $('.slick-product').resize();
    $('.slick-product-nav').resize();
    $('.slick-product-poup').resize();
    $('.slick-product-nav-poup').resize();
  });
$('.modal').on('opened', function() {
    $('.slick-product-modal-gallery-block').slick("setPosition", 0);
    $('.slick-product-modal-gallery').slick("setPosition", 0);
    $('.slick-popup-nav').slick("setPosition", 0); 
    $('.slick-popup').slick("setPosition", 0); 
    $('.slick-popup-product-pic').slick("setPosition", 0);
    $('.slick-product').slick("setPosition", 0);
    $('.slick-product-nav').slick("setPosition", 0);
    $('.slick-product-poup').slick("setPosition", 0);
    $('.slick-product-nav-poup').slick("setPosition", 0);

}); 
// Table Responsive Footable
jQuery(function($){
	$('.table').footable();
});
// Spiner input
(function($) {
  $('.spinner .input-group-btn-vertical:last-of-type .btn').on('click', function() {
    var input = $(this).parent().parent().children('input');
    input.val(parseInt(input.val(), 10) + 1);
  });
  $('.spinner .input-group-btn-vertical:first-of-type .btn').on('click', function() {
    var input = $(this).parent().parent().children('input');
    var newvalue = parseInt(input.val(), 10) - 1;
    if (newvalue >= 0)
      input.val(newvalue);
  });
})(jQuery);

// tooltip
$('[data-toggle="tooltip"]').tooltip(); 
// one click buy button collapse

$("button.one-click-buy").click(function(){
 event.preventDefault();
 $(".buttons-product").addClass('full-form');
 $(this).prev("div").addClass('active-form');
 $( "button.one-click-buy" ).click(function(){
 $( ".one-click-buy-form" ).submit();
 });
});
// sidebar menu open 
$(".menu-but").click(function(){
 $(this).next(".filter-panels").toggle('show');
});
$(".sort-but").click(function(){
 $(this).next(".sort").toggle('show');
});

$(".more-look").click(function(){
 event.preventDefault();
 $(this).prev(".history-body").toggleClass('body-all');
 $(this).prev(".history-body").find(".spoil-body").toggleClass('spoil-all');
});
$(".more").click(function(){
 event.preventDefault();
 $(this).prev(".product-description").find(".more-text").toggle('show');
}); 
  $(".spoiler-trigger").click(function() {
    $(this).parent().next().collapse('toggle');
  });
  $(".spoiler-trigger").click(function() {
    $(this).parent().prev().collapse('toggle');
  });
  $(".drop-menu a").click(function() { 
    $(this).parent().toggleClass("active"); 
  });  
  // row header info close
  $(".row-info .close").click(function() { 
    $(".row-info").hide(); 
  });  
// menu pic hover
$(document).ready(function(){
  $('a.menu').hover(
    function() {
        id = $(this).attr('id');
        num = id.replace(/menu(\d+)/gi, '$1');
        $('#img').attr('src', 'img/menu_pic/'+num+'.png');
    },
    function() { 
        $('#img').attr('src', 'img/menu_pic/'+num+'.png'); 
    }
  );   
  }); 
// media query
$(document).ready(function(){
  function classFunction(){
    if($('body').width()<768){
     $('.ship-cart').appendTo('.navbar-header');
     $('.curense').appendTo('.js-navbar .mobile-menu-row');
     $('.search').appendTo('.js-navbar .mobile-menu-row');
    }
    if($('body').width()>768){ 
		// menu hover
		$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).show();
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).hide();
		});
		// hover menu - brightness page 
		$("nav ul.navbar-nav li a").hover(function() {
		  $("#page-overlay").toggleClass("hoverover");  
		});   
    $(".dropdown-menu>li>a.dropdown-toggle").hover(function() { 
      $("#page-overlay").toggleClass("hoverover");  
    }); 
    $("nav .ship-cart-list  a").hover(function() { 
      $("#page-overlay").toggleClass("hoverover");  
    });   
    $(".curense>li>a.dropdown-toggle").hover(function() { 
      $("#page-overlay").toggleClass("hoverover");  
    });   
    $(".curense a").hover(function() { 
      $("#page-overlay").toggleClass("hoverover");  
    });   
		$("nav .js-navbar ul.navbar-nav .full-menu a").hover(function() { 
		  $("#page-overlay").toggleClass("hoverover");  
		});  
		$(".dropdown-menu").hover(function() { 
		  $("#page-overlay").toggleClass("hoverover");  
		});  
    $("ul.dropdown-menu.profile-menu a").hover(function() { 
      $("#page-overlay").toggleClass("hoverover");  
    });  
    }
    else{ 
    }
  }
  
  classFunction();
  $(window).resize(classFunction);
 })
// Reiting star
var __slice = [].slice;

(function($, window) {
  var Starrr;

  Starrr = (function() {
    Starrr.prototype.defaults = {
      rating: void 0,
      numStars: 5,
      change: function(e, value) {}
    };

    function Starrr($el, options) {
      var i, _, _ref,
        _this = this;

      this.options = $.extend({}, this.defaults, options);
      this.$el = $el;
      _ref = this.defaults;
      for (i in _ref) {
        _ = _ref[i];
        if (this.$el.data(i) != null) {
          this.options[i] = this.$el.data(i);
        }
      }
      this.createStars();
      this.syncRating();
      this.$el.on('mouseover.starrr', 'span', function(e) {
        return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
      });
      this.$el.on('mouseout.starrr', function() {
        return _this.syncRating();
      });
      this.$el.on('click.starrr', 'span', function(e) {
        return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
      });
      this.$el.on('starrr:change', this.options.change);
    }

    Starrr.prototype.createStars = function() {
      var _i, _ref, _results;

      _results = [];
      for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
        _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
      }
      return _results;
    };

    Starrr.prototype.setRating = function(rating) {
      if (this.options.rating === rating) {
        rating = void 0;
      }
      this.options.rating = rating;
      this.syncRating();
      return this.$el.trigger('starrr:change', rating);
    };

    Starrr.prototype.syncRating = function(rating) {
      var i, _i, _j, _ref;

      rating || (rating = this.options.rating);
      if (rating) {
        for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
        }
      }
      if (rating && rating < 5) {
        for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
          this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
        }
      }
      if (!rating) {
        return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
      }
    };

    return Starrr;

  })();
  return $.fn.extend({
    starrr: function() {
      var args, option;

      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.each(function() {
        var data;

        data = $(this).data('star-rating');
        if (!data) {
          $(this).data('star-rating', (data = new Starrr($(this), option)));
        }
        if (typeof option === 'string') {
          return data[option].apply(data, args);
        }
      });
    }
  });
})(window.jQuery, window);
// star rating
$(function() {
  return $(".starrr").starrr();
});

$( document ).ready(function() {
      
  $('.hearts').on('starrr:change', function(e, value){
    $('#count').html(value);
  });
  
  $('.hearts-existing').on('starrr:change', function(e, value){
    $('#count-existing').html(value);
  });
});