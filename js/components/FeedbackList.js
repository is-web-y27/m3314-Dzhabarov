export default {
    props: {
        feedbacks: { type: Array, required: true }
    },
    emits: ['delete-feedback'],
    methods: {
        getProgramName(code) {
            const map = { 'trekking': 'Горный треккинг', 'wrestling': 'Борьба и ОФП', 'media': 'Медиашкола' };
            return map[code] || code;
        },
        getStars(rating) {
            return '★'.repeat(rating) + '☆'.repeat(5 - rating);
        }
    },
    template: `
    <div class="feedback-list-container">
      <h3>Отзывы участников ({{ feedbacks.length }})</h3>
      <div v-if="feedbacks.length === 0">Пока нет отзывов. Будьте первым!</div>
      <div id="feedback-list" class="feedback-list">
        <div v-for="item in feedbacks" :key="item.id" class="feedback-item" :data-id="item.id">
          <div class="feedback-header">
            <span class="feedback-name">{{ item.name }}</span>
            <span class="feedback-date">{{ item.date }}</span>
          </div>
          <div class="feedback-meta">
            <span class="feedback-program">{{ getProgramName(item.program) }}</span>
            <div class="feedback-rating">
              <span class="rating-stars">{{ getStars(item.rating) }}</span>
              <span class="rating-value">({{ item.rating }}/5)</span>
            </div>
          </div>
          <div class="feedback-content">
            <p class="feedback-comment">{{ item.comment }}</p>
            <p v-if="item.email" class="feedback-email">Email: {{ item.email }}</p>
          </div>
          <div class="feedback-actions">
            <button @click="$emit('delete-feedback', item.id)" class="delete-btn" style="color: red; margin-top: 10px;">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  `
};
