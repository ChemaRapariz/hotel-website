/*=============== SWIPER JS ===============*/
function initSwiper() {
  let isLoopEnabled = window.innerWidth >= 768; // Loop enabled for screens 768px and larger

  let swiperCards = new Swiper(".card__content", {
    loop: isLoopEnabled,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
}

// Initialize Swiper on page load
initSwiper();

// Reinitialize Swiper when resizing the window
window.addEventListener("resize", function () {
  document.querySelector(".card__content").swiper.destroy(true, true);
  initSwiper();
});
