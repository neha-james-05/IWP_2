const attendanceData = [
  { subject: "Artificial Intelligence", conducted: 40, present: 36 },
  { subject: "Cloud Computing", conducted: 38, present: 34 },
  { subject: "Machine Learning", conducted: 42, present: 39 },
  { subject: "Internet & Web Programming", conducted: 44, present: 41 },
];

function loadAttendanceTable() {
  const tbody = document.getElementById("attendanceBody");
  let totalConducted = 0;
  let totalPresent = 0;

  attendanceData.forEach((item, index) => {
    const percentage = ((item.present / item.conducted) * 100).toFixed(2);
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.subject}</td>
      <td>${item.conducted}</td>
      <td>${item.present}</td>
      <td>${percentage}%</td>
    `;

    tbody.appendChild(row);

    totalConducted += item.conducted;
    totalPresent += item.present;
  });

  const totalPercentage = ((totalPresent / totalConducted) * 100).toFixed(2);

  document.getElementById("totalConducted").textContent = totalConducted;
  document.getElementById("totalPresent").textContent = totalPresent;
  document.getElementById("totalPercentage").textContent = `${totalPercentage}%`;
}

window.onload = loadAttendanceTable;
