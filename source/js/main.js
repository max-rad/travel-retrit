import {initHeaderMenu} from './modules/init-header-menu.js';
import {initGuideSlider} from './modules/init-guide-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initGuideSlider();
  });
});
