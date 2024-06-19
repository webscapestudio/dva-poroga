import Swiper from 'swiper'

export const sliders = () => {
  // eslint-disable-next-line no-new
  new Swiper('.mySwiper', {
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}
