import {Swiper} from '../vendor/swiper-bundle.js';

const slider = document.querySelector('[data-slider="popular-tours"]');
const totalSlides = slider.querySelectorAll('.swiper-slide').length;

const controls = document.querySelector('[data-slider-controls="popular-tours"]');
const prev = controls.querySelector('[data-slider-control="prev"]');
const next = controls.querySelector('[data-slider-control="next"]');
const fraction = controls.querySelector('[data-slider-fraction]');

const breakpointMediaDesktop = window.matchMedia('(min-width: 1600px)');
const breakpointMediaNotebook = window.matchMedia('(min-width: 1200px)');
const breakpointMediaTablet = window.matchMedia('(min-width: 768px)');
const breakpointMediaMobile = window.matchMedia('(min-width: 320px)');

let visibleSlides;

const breakpointChecker = () => {
  if (breakpointMediaDesktop.matches) {
    visibleSlides = 4;
  } else if (breakpointMediaNotebook.matches) {
    visibleSlides = 3;
  } else if (breakpointMediaTablet.matches) {
    visibleSlides = 2;
  } else if (breakpointMediaMobile.matches) {
    visibleSlides = 1;
  }

  fraction.textContent = `1 / ${totalSlides - visibleSlides + 1}`;

  breakpointMediaDesktop.addListener(breakpointChecker);
  breakpointMediaNotebook.addListener(breakpointChecker);
  breakpointMediaTablet.addListener(breakpointChecker);
  breakpointMediaMobile.addListener(breakpointChecker);
};

const initPopularToursSlider = () => {
  if (!slider) {
    return;
  }

  breakpointChecker();

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
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    on: {
      slideChange: () => {
        fraction.textContent = `${swiper.realIndex + 1} / ${totalSlides - visibleSlides + 1}`;
      }
    }
  });
};

export {initPopularToursSlider};
