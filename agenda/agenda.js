let currentDay = null;
const agendaCache = {
  day1: `
    <h2>Day 1 Agenda</h2>
    <p>08:00 - 08:30 - Check-in</p>
    <p>08:30 - 09:00 - Opening Ceremony</p>
    <p>09:00 - 12:30 - Workshops</p>
    <p>12:30 - 14:00 - Lunch break and prayer time</p>
    <p>14:00 - 16:30 - Workshops</p>
    <p>16:30 - 18:00 - Coffee break and some fun activities</p>
    <p>18:00 - 20:00 - Workshops</p>
    <p>20:00 - 21:00 - Dinner Break</p>
  `,
  day2: `
    <h2>Day 2 Agenda</h2>
    <p>08:00 - 08:30 - Check-in</p>
    <p>09:00 - 12:30 - Workshops</p>
    <p>12:30 - 14:00 - Lunch break and prayer time</p>
    <p>14:00 - 16:30 - Challenges</p>
    <p>16:30 - 17:30 - Coffee Break and some fun activities</p>
    <p>17:30 - 19:00 - Challenges</p>
    <p>19:00 - 20:00 - Announcing hackathon winners and<br> qualifiers, collecting tools.</p>
    <p>20:00 - 21:30 - Dinner Break and announcing the start <br> of the hackathon</p>
    <p>21:30 - 00:00 - REBRANDING TIME</p>
    <p>00:00 - 01:00 - Midnight break</p>
  `,
  day3: `
    <h2>Day 3 Agenda</h2>
    <p>08:00 - 08:30 - Breakfast break</p>
    <p>08:30 - 12:00 - REBRANDIG TIME</p>
    <p>12:00 - 13:30 - Lunch Break and prayer time</p>
    <p>13:30 - 16:30 - REBRANDING TIME</p>
    <p>16:30 - 17:00 - Coffee break and some fun activities</p>
    <p>17:00 - 20:00 - REBRANDING TIME</p>
    <p>20:00 - 21:00 - Submission</p>
    <p>21:00 - 22:00 - Dinner break</p>
    <p>22:00 - 23:00 - Announcing winner and closing ceremony</p>
  `
};

function toggleAgenda(day) {
  const agendaOutput = document.getElementById('agenda-output');
  // if (currentDay == day) {
  //   agendaOutput.innerHTML = '';
  //   currentDay = null;
  // } else {
  //   agendaOutput.innerHTML = agendaCache[day];
  //   currentDay = day;
  // }
  agendaOutput.innerHTML = agendaCache[day];
    currentDay = day;
}
