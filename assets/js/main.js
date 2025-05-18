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
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 17,
      },
      600: {
        slidesPerView: 1.4,
       spaceBetween: 17,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  // Card Slider2
  var swiper2 = new Swiper(".card-slider2", {
    slidesPerView: 3.4,
    spaceBetween: 30,
      breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 17,
      },
      600: {
        slidesPerView: 1.4,
       spaceBetween: 17,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  // Card Slider3
  var swiper3 = new Swiper(".card-slider3", {
    slidesPerView: 3.4,
    spaceBetween: 30,
      breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 17,
      },
      600: {
        slidesPerView: 1.4,
       spaceBetween: 17,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  // Card Slider4
  var swiper4 = new Swiper(".card-slider4", {
    slidesPerView: 3.4,
    spaceBetween: 30,
      breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 17,
      },
      600: {
        slidesPerView: 1.4,
       spaceBetween: 17,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
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
        b.classList.remove("active", "text-white", "border-primary");
        b.classList.add("text-white/30", "border-transparent");
      });

      // Hide all content blocks
      tabContents.forEach((content) => content.classList.add("hidden"));

      // Activate clicked tab
      btn.classList.remove("text-white/30", "border-transparent");
      btn.classList.add("text-white", "border-primary");
      document.getElementById(target).classList.remove("hidden");
    });
  });


  window.toggleSidebar = function () {
  const sidebar = document.getElementById('sidebar');
  const body = document.body;

  const isHidden = sidebar.classList.contains('-translate-x-full');

  if (isHidden) {
    sidebar.classList.remove('-translate-x-full');
    body.classList.add('overflow-hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    body.classList.remove('overflow-hidden');
  }
};

  window.addEventListener('load', () => {
    const navbar = document.getElementById('navbar');
    const sidebar = document.getElementById('sidebar');

    if (navbar && sidebar) {
      const navbarHeight = navbar.offsetHeight;
      sidebar.style.top = `${navbarHeight}px`;
      sidebar.style.height = `calc(100vh - ${navbarHeight}px)`;
    }
  });

  window.addEventListener('resize', () => {
    const navbar = document.getElementById('navbar');
    const sidebar = document.getElementById('sidebar');

    if (navbar && sidebar) {
      const navbarHeight = navbar.offsetHeight;
      sidebar.style.top = `${navbarHeight}px`;
      sidebar.style.height = `calc(100vh - ${navbarHeight}px)`;
    }
  });

});
