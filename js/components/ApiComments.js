import { ApiService } from '../modules/api.js';

export default {
    data() {
        return {
            comments: [],
            loading: false,
            error: null,
            apiService: new ApiService()
        };
    },
    methods: {
        async loadComments() {
            this.loading = true; this.error = null; this.comments = [];
            try {
                this.comments = await this.apiService.getComments();
            } catch (e) {
                this.error = 'Ошибка: ' + e.message;
            } finally {
                this.loading = false;
            }
        }
    },
    template: `
    <div class="api-section">
      <h3>Комментарии из внешнего API</h3>
      <p style="margin-bottom: 1rem;">Загрузка данных с JSONPlaceholder.</p>
      
      <button @click="loadComments" class="btn" :disabled="loading" style="margin-bottom: 1.5rem;">
        {{ loading ? 'Загрузка...' : 'Загрузить комментарии' }}
      </button>
      
      <div v-if="error" style="color: red; margin-bottom: 1rem;">{{ error }}</div>
      
      <div v-for="comment in comments" :key="comment.id" 
           style="background: #f8f9fa; padding: 1rem; margin-bottom: 1rem; border-radius: 8px; border-left: 4px solid #4682B4;">
        <strong style="color: #246744;">{{ comment.name }}</strong>
        <div style="font-size: 0.9rem; color: #666; margin: 5px 0;">{{ comment.email }}</div>
        <p style="margin: 0;">{{ comment.body }}</p>
      </div>
    </div>
  `
};
