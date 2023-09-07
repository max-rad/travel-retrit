import {initHeaderMenu} from './modules/init-header-menu.js';
import {initGuidesSlider} from './modules/init-guides-slider.js';
import {initPopularToursSlider} from './modules/init-popular-tours-slider.js';
import {initTourReviewsSlider} from './modules/init-tour-reviews-slider.js';
import {initCustomSelect} from './modules/init-custom-select.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initGuidesSlider();
    initPopularToursSlider();
    initTourReviewsSlider();
    initCustomSelect();
  });
});
