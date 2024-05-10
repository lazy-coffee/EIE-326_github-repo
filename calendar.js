$(document).ready(function() {
  const renderCalendar = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let calendarHTML = `
      <table class="calendar">
        <thead>
          <tr>
            <th colspan="7" class="month-heading">${monthNames[currentMonth]} ${currentYear}</th>
          </tr>
          <tr>
            ${daysOfWeek.map(day => `<th class="day-of-week">${day}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
    `;

    let currentWeek = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      currentWeek.push('<td class="empty"></td>');
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
      currentWeek.push(`
        <td class="day">
          <div class="day-number">${day}</div>
          <div class="day-of-week">${daysOfWeek[dayOfWeek]}</div>
        </td>
      `);
      
      if ((startingDayOfWeek + day) % 7 === 0 || day === daysInMonth) {
        calendarHTML += `<tr>${currentWeek.join('')}</tr>`;
        currentWeek = [];
      }
    }

    calendarHTML += `
        </tbody>
      </table>
    `;

    return calendarHTML;
  };

  let currentDate = new Date();
  $('#calendar-container').html(renderCalendar(currentDate));

  $('#prev-month').click(function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    $('#calendar-container').html(renderCalendar(currentDate));
  });

  $('#next-month').click(function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    $('#calendar-container').html(renderCalendar(currentDate));
  });
});
