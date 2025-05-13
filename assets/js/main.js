$(document).ready(function () {
  /*======================= hero-slider =========================*/
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
  /*======================= card-slider =========================*/
  var swiper = new Swiper(".card-slider", {
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

   /*======================= grab-scroll =========================*/
  const slider = document.querySelector('.grab-scroll');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('grabbing');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('grabbing');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('grabbing');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
})