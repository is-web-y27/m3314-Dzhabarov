export default {
    emits: ['add-feedback'],
    data() {
        return {
            form: {
                name: '',
                email: '',
                program: 'trekking',
                rating: 5,
                comment: ''
            },
            message: null
        };
    },
    methods: {
        submit() {
            if (this.form.name.length < 2 || this.form.comment.length < 10) {
                alert('Заполните обязательные поля корректно');
                return;
            }

            this.$emit('add-feedback', {
                id: Date.now(),
                ...this.form,
                date: new Date().toLocaleString('ru-RU')
            });

            this.form.name = ''; this.form.email = ''; this.form.comment = ''; this.form.rating = 5;
            this.showMessage('Отзыв успешно добавлен!', 'success');
        },
        showMessage(text, type) {
            this.message = { text, type };
            setTimeout(() => this.message = null, 3000);
        }
    },
    template: `
    <div class="feedback-section">
      <h3>Оставить отзыв</h3>
      
      <div v-if="message" :style="{ 
          padding: '1rem', margin: '1rem 0', borderRadius: '4px', 
          background: message.type === 'success' ? '#d4edda' : '#f8d7da',
          color: message.type === 'success' ? '#155724' : '#721c24' 
      }">
        {{ message.text }}
      </div>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="name">Ваше имя *</label>
          <input v-model="form.name" type="text" id="name" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" class="form-input">
        </div>
        
        <div class="form-group">
          <label for="program">Программа</label>
          <select v-model="form.program" id="program" class="form-select">
            <option value="trekking">Горный треккинг</option>
            <option value="wrestling">Борьба и ОФП</option>
            <option value="media">Медиашкола</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Оценка: <span style="color: #FF8C00">{{ '★'.repeat(form.rating) }}</span></label>
          <input v-model.number="form.rating" type="range" min="1" max="5" style="width: 100%">
        </div>
        
        <div class="form-group">
          <label for="comment">Комментарий *</label>
          <textarea v-model="form.comment" id="comment" rows="4" class="form-input" required></textarea>
        </div>
        
        <button type="submit" class="btn">Добавить отзыв</button>
      </form>
    </div>
  `
};
