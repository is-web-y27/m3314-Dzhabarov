export default {
    data() {
        return {
            programs: [
                { name: 'Горный треккинг', duration: '7-10 дней', level: 'Начинающий', price: '20 000 руб.' },
                { name: 'Борьба и ОФП', duration: '14 дней', level: 'Средний', price: '25 000 руб.' },
                { name: 'Медиашкола', duration: '10 дней', level: 'Начинающий', price: '18 000 руб.' }
            ]
        };
    },
    template: `
    <div class="programs-table-wrapper">
      <h3>Доступные программы (Rendered by Vue)</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background: #f4f4f4; text-align: left;">
            <th style="padding: 10px; border: 1px solid #ddd;">Программа</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Длительность</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Уровень</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prog, index) in programs" :key="index">
            <td style="padding: 10px; border: 1px solid #ddd;">{{ prog.name }}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{ prog.duration }}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{ prog.level }}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{ prog.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
};
