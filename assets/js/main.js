$(document).ready(function () {
  // Hero Slider
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

  // Card Slider
  var swiper2 = new Swiper(".card-slider", {
    slidesPerView: 3.4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // Card Slider2
  var swiper2 = new Swiper(".card-slider2", {
    slidesPerView: 3.4,
    spaceBetween: 30,
  });
  // Card Slider3
  var swiper2 = new Swiper(".card-slider3", {
    slidesPerView: 3.4,
    spaceBetween: 30,
  });
  // Card Slider4
  var swiper2 = new Swiper(".card-slider4", {
    slidesPerView: 3.4,
    spaceBetween: 30,
  });

  // Grab Scroll
  const slider = document.querySelector('.grab-scroll');
  if (slider) {
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
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }



   const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content-block");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      // Remove active state from all buttons
      tabButtons.forEach((b) => {
        b.classList.remove("text-white", "border-b-2", "border-[#FFB743]");
        b.classList.add("text-gray-400");
      });

      // Hide all content blocks
      tabContents.forEach((content) => content.classList.add("hidden"));

      // Activate clicked tab
      btn.classList.remove("text-gray-400");
      btn.classList.add("text-white", "border-b-2", "border-[#FFB743]");
      document.getElementById(target).classList.remove("hidden");
    });
  });
});
