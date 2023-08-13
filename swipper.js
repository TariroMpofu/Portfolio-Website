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
  loop: true,
  slidesPerView: '3', // Set to 'auto' to display as many images as fit in the view
  spaceBetween: 20, // Adjust the value to create a gap between images
});
