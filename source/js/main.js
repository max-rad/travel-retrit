import {initHeaderMenu} from './modules/init-header-menu.js';
import {initGuidesSlider} from './modules/init-guides-slider.js';
import {initPopularToursSlider} from './modules/init-popular-tours-slider.js';
import {initTourReviewsSlider} from './modules/init-tour-reviews-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initGuidesSlider();
    initPopularToursSlider();
    initTourReviewsSlider();
  });
});
