export default {
    data() {
        return {
            programs: [
                {
                    id: 1,
                    title: 'Горный треккинг (7–10 дней)',
                    desc: 'Маршруты по предгорьям Кавказа, базовые навыки туризма, безопасность в горах.',
                    image: 'images/1.jpg',
                    caption: 'Треккинг по живописным маршрутам Кавказа',
                    features: [
                        'Дневные переходы 8–12 км',
                        'Работа в связках, лагерь, костёр',
                        'Инструктаж по погоде и высоте'
                    ],
                    tableData: { name: 'Горный треккинг', duration: '7-10 дней', level: 'Начинающий', price: '20 000 руб.' }
                },
                {
                    id: 2,
                    title: 'Борьба и ОФП',
                    desc: 'Тренировки под руководством местных наставников. Техника, сила, дисциплина.',
                    image: 'images/2.jpg',
                    caption: 'Занятия борьбой под руководством опытных наставников',
                    features: [
                        'Разминка и база',
                        'Партер и бросковые комбинации',
                        'Спарринги только в защитной экипировке'
                    ],
                    tableData: { name: 'Борьба и ОФП', duration: '14 дней', level: 'Средний', price: '25 000 руб.' }
                },
                {
                    id: 3,
                    title: 'Медиашкола',
                    desc: 'Учимся рассказывать историю о собственном пути: фото, короткое видео, дневник похода.',
                    image: 'images/3.jpeg',
                    caption: 'Освоение современных медиатехнологий',
                    features: [],
                    tableData: { name: 'Медиашкола', duration: '10 дней', level: 'Начинающий', price: '18 000 руб.' }
                }
            ]
        };
    },
    template: `
    <div class="programs-container">
      <!-- Карточки программ с фото -->
      <article v-for="prog in programs" :key="prog.id" class="program-card">
        <h3>{{ prog.title }}</h3>
        <p>{{ prog.desc }}</p>

        <div class="program-image-container">
          <img :src="prog.image" :alt="prog.title" class="program-image">
          <p class="program-caption">{{ prog.caption }}</p>
        </div>

        <ul v-if="prog.features.length" class="list list--unordered">
          <li v-for="(feat, i) in prog.features" :key="i" class="list__item">{{ feat }}</li>
        </ul>
      </article>

      <aside class="aside" style="margin: 2rem 0; background: #fff; border-left: 4px solid #FF8C00; padding: 1.5rem;">
        <h3>Важно знать</h3>
        <p>Актуально: <strong>участие только при наличии медицинского допуска и согласия родителей</strong>.</p>
      </aside>

      <!-- Итоговая таблица -->
      <div class="programs-table-wrapper">
        <h3>Расписание и стоимость программ</h3>
        <table class="vue-table">
          <thead>
            <tr>
              <th>Программа</th>
              <th>Длительность</th>
              <th>Уровень</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prog in programs" :key="'row-'+prog.id">
              <td>{{ prog.tableData.name }}</td>
              <td>{{ prog.tableData.duration }}</td>
              <td>{{ prog.tableData.level }}</td>
              <td>{{ prog.tableData.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};
