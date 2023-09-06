import {Swiper} from "../vendor/swiper-bundle.js";

const slider = document.querySelector('[data-slider="tour-reviews"]');
const breakpointMediaDesktop = window.matchMedia('(min-width: 1024px)');
const breakpointMediaMobile = window.matchMedia('(min-width: 320px)');

let totalSlides;
let visibleSlides;
let fraction;

const breakpointChecker = () => {
  if (breakpointMediaDesktop.matches) {
    visibleSlides = 2;
  } else if (breakpointMediaMobile.matches) {
    visibleSlides = 1;
  }

  fraction.textContent = `1 / ${totalSlides - visibleSlides + 1}`;

  breakpointMediaDesktop.addListener(breakpointChecker);
  breakpointMediaMobile.addListener(breakpointChecker);
};

const initTourReviewsSlider = () => {
  if (!slider) {
    return;
  }

  const controls = document.querySelector('[data-slider-controls="tour-reviews"]');
  const prev = controls.querySelector('[data-slider-control="prev"]');
  const next = controls.querySelector('[data-slider-control="next"]');
  fraction = controls.querySelector('[data-slider-fraction]');

  totalSlides = slider.querySelectorAll('.swiper-slide').length;

  breakpointChecker();

  const swiper = new Swiper(slider, {
    slidesPerView: 2,
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
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    on: {
      slideChange: () => {
        fraction.textContent = `${swiper.realIndex + 1} / ${totalSlides - visibleSlides + 1}`;
      }
    }
  });
}

export {initTourReviewsSlider};
