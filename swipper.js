var mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    640: {
      slidesPerView: 1, // Show 1 slide on screens smaller than 640px
    },
    768: {
      slidesPerView: 2, // Show 2 slides on screens smaller than 768px
    },
    1024: {
      slidesPerView: 3, // Show 3 slides on screens smaller than 1024px
    }
  },
  loop: true,
  spaceBetween: 20, // Adjust the value to create a gap between images
});
