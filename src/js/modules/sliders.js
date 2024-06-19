import { Swiper } from 'swiper'

export const sliders = () => {
  new Swiper('.mySwiper', {
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}
