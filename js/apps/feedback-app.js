import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import FeedbackForm from '../components/FeedbackForm.js';
import FeedbackList from '../components/FeedbackList.js';
import ApiComments from '../components/ApiComments.js';
import FooterStats from '../components/FooterStats.js';
import { storageService } from '../modules/storage.js';
import { initNavigation } from '../modules/utils.js';

const app = createApp({
    components: { FeedbackForm, FeedbackList, ApiComments },
    data() { return { feedbacks: [] }; },
    created() { this.feedbacks = storageService.getFeedbacks().sort((a, b) => b.id - a.id); },
    methods: {
        handleAdd(fb) { this.feedbacks.unshift(fb); storageService.saveFeedbacks(this.feedbacks); },
        handleDelete(id) {
            if(confirm('Удалить?')) {
                this.feedbacks = this.feedbacks.filter(f => f.id !== id);
                storageService.saveFeedbacks(this.feedbacks);
            }
        }
    },
    template: `
    <div>
      <feedback-list :feedbacks="feedbacks" @delete-feedback="handleDelete"></feedback-list>
      <feedback-form @add-feedback="handleAdd"></feedback-form>
      <api-comments></api-comments>
    </div>
  `
});

app.mount('#feedback-app');
const footerApp = createApp(FooterStats);
footerApp.mount('#footer-stats');
initNavigation();
