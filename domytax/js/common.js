$(function() {
  $(".slider-exemple").slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<div class="slider-left-arrow"> <span class="glyphicon glyphicon-chevron-left"></span></div>',
    nextArrow:
      '<div class="slider-right-arrow"> <span class="glyphicon glyphicon-chevron-right"></span></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px"
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(".s-projj .nav-pills > li > a").on("shown.bs.tab", function(e) {
    e.target;
    e.relatedTarget;
    $(".slider-exemple").slick("setPosition");
  });
  $(".lookall").click(function() {
    $(this)
      .parent(".s-projj .addition-block ul")
      .find("li")
      .toggleClass("flexy");
  });
  if ($(window).width() < 1200) {
    $(".menu").appendTo(".menu-mobile-row");
    $(".menu-hum").click(function() {
      $(".menu ").toggle("show");
    });
  } else {
    $(".menu-hum").click(function() {
      $(".menu").toggle("show");
    });
  }
});
