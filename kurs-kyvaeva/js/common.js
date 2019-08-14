$(function() {
  $(".humb").click(function() {
    $("ul.menu").toggle("show");
  });

  function Utils() {}

  Utils.prototype = {
    constructor: Utils,
    isElementInView: function(element, fullyInView) {
      var pageTop = $(window).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var elementTop = $(element).offset().top;
      var elementBottom = elementTop + $(element).height();

      if (fullyInView === true) {
        return pageTop < elementTop && pageBottom > elementBottom;
      } else {
        return elementTop <= pageBottom && elementBottom >= pageTop;
      }
    }
  };

  var Utils = new Utils();

  var scale = 1;
  var imgBox = $(".box");
  var titleBox = $(".box-title");
  var contentBox = $(".s-text-1");
  var footerBox = $(".box-footer");

  $(window).scroll(function() {
    var isBoxInView = Utils.isElementInView(imgBox, false);
    var isTitleBoxInView = Utils.isElementInView(titleBox, false);
    var isContentBoxInView = Utils.isElementInView(contentBox, false);
    var isFooterInView = Utils.isElementInView($(".footer"), false);

    if (isBoxInView) {
      let distanceToTop = imgBox.get(0).getBoundingClientRect().top;
      var scaleBy = (distanceToTop * 0.0005 - 0.15).toFixed(4);
      if (scaleBy < 0.25 && scaleBy > 0) {
        imgBox.css("transform", "scale(" + (scale - scaleBy) + ")");
      } else {
        imgBox.css("transform", "scale(1.0)");
      }
    }

    if (isTitleBoxInView) {
      let distanceToTop =
        titleBox.get(0).getBoundingClientRect().top * 0.005 - 0.5;
      titleBox.css("opacity", 1 + distanceToTop);
    }

    if (isContentBoxInView) {
      $(".box-content").addClass("fadeInUp");
    }

    if (isFooterInView) {
      let distanceToTop = footerBox.get(0).getBoundingClientRect().top;
      let opacityFactor = distanceToTop * 0.001 - 0.5;
      if (opacityFactor < 0.6 && opacityFactor > 0) {
        footerBox.css("opacity", 1 - opacityFactor);
      } else {
        footerBox.css("opacity", 1);
      }
    }
  });
});
