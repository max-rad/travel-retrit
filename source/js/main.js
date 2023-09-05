import {initHeaderMenu} from './modules/init-header-menu.js';
import {initGuideSlider} from './modules/init-guide-slider.js';
import {initPopularToursSlider} from './modules/init-popular-tours-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initGuideSlider();
    initPopularToursSlider();
  });
});
