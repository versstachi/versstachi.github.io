$(document).ready(function() {
  const swiper = new Swiper(".swiper-container", {
    speed: 500,
    spaceBetween: 70,
    slidesPerView: "auto",
    autoHeight: true,
    pagination: {
      el: $(".counter"),
      type: "custom",
      renderCustom: function(swiper, current) {
        return `<span class="counter__current">${current}</span>/<span class="counter__total">${
          swiper.slides.length
        }</span>`;
      }
    },
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev"
    }
  });

  $(".action-btn").on("click", function(e) {
    e.preventDefault();
    let to = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(to).offset().top }, "slow");
  });

  $(".tels") && $(".tels").mask("999-99-99");

  $(".tels") &&
    $(".tels").CcPicker({
      countryCode: "ua"
    });
});
