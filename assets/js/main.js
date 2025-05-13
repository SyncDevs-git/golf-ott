$(document).ready(function () {
  /*======================= 09: Testimonial slider =========================*/
  var swiper = new Swiper(".hero-slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        const slides = document.querySelectorAll('.swiper-slide');
        const title = slides[index]?.dataset?.title || `Slide ${index + 1}`;
        return `<span class="${className}" data-tooltip="${title}"></span>`;
      }
    }
  });
})