$(document).ready(function() {
  $(".action-btn").on("click", function(e) {
    e.preventDefault();
    var offset = $(".main-header.fixed-top").outerHeight() || 0;
    var to = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(to).offset().top - offset }, "slow");
    $(".main-nav").removeClass("active");
    $(".toggle").removeClass("active");
  });

  function toggle() {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".collapse-item").removeClass("active");
    $(".collapse-item__body").slideUp();

    $(this).toggleClass("active");
    $(this)
      .find(".collapse-item__body")
      .slideToggle();
  }

  function clickToggle() {
    if ($(this).hasClass("active")) {
      $(".collapse-item").removeClass("active");
      $(".collapse-item__body").slideUp();
    } else {
      $(".collapse-item").removeClass("active");
      $(".collapse-item__body").slideUp();
      $(this).toggleClass("active");
      $(this)
        .find(".collapse-item__body")
        .slideToggle();
    }
  }

  if ($(window).width() < 992) {
    $(".collapse-item").on("click", clickToggle);
  } else {
    $(".collapse-item").on("mouseover", toggle);
  }

  $(window).resize(function() {
    if ($(window).width() < 992) {
      $(".collapse-item").off("mouseover", toggle);
      $(".collapse-item").on("click", clickToggle);
    } else {
      $(".collapse-item").on("mouseover", toggle);
      $(".collapse-item").off("click", clickToggle);
    }
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
  });

  var imgUrl = $(".video-container")
    .attr("id")
    .replace("vid-", "");

  $(".video-container").css(
    "backgroundImage",
    "url(https://img.youtube.com/vi/" + imgUrl + "/sddefault.jpg)"
  );

  $(".video-container").click(function() {
    var id = $(this)
      .attr("id")
      .replace("vid-", "");
    var vid =
      '<iframe src="https://www.youtube.com/embed/' +
      id +
      '?autoplay=1" allow="autoplay" frameborder="0" allowfullscreen></iframe>';
    $(".video-container").html(vid);
  });
  $(".play-btn").click(function() {
    $(".video-container").click();
  });
});
