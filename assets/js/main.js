/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: false,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
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