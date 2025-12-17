import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import FooterStats from '../components/FooterStats.js';
import { initNavigation } from '../modules/utils.js';

const footerApp = createApp(FooterStats);
footerApp.mount('#footer-stats');

initNavigation();