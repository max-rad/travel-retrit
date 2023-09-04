import {Swiper} from '../vendor/swiper-bundle.js';
const initGuideSlider = () => {
    const slider = document.querySelector('[data-slider="guide"]');

    if (!slider) {
      return;
    }

    const slideCount = slider.querySelectorAll('.swiper-slide').length;

    const controls = document.querySelector('[data-slider-controls="guide"]');
    const prev = controls.querySelector('[data-slider-control="prev"]');
    const next = controls.querySelector('[data-slider-control="next"]');
    const fraction = controls.querySelector('[data-slider-fraction]');

    fraction.textContent = `1 / ${slideCount}`;

    const swiper = new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {
          fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
        }
      }
    });
};

export {initGuideSlider};
