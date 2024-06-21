export const sliders = () => {
  // eslint-disable-next-line no-new
  new Swiper('.blog-section-slider', {
    spaceBetween: 16,

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      630: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}
