$(document).ready(function () {
     /*======================= 09: Testimonial slider =========================*/
  var swiper = new Swiper(".hero-slider", {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },

  });
})