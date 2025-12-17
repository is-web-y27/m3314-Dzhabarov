import { getLoadTime } from '../modules/utils.js';

export default {
    data() {
        return {
            loadTime: 0
        };
    },
    mounted() {
        this.loadTime = getLoadTime();
    },
    template: `
    <p class="footer__load-time">Время загрузки страницы: {{ loadTime }} мс (Vue)</p>
  `
};
