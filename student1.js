document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('search-btn');
    const resultDisplay = document.getElementById('result');

    searchBtn.addEventListener('click', function () {
        const searchName = document.getElementById('search-name').value.trim();
        const searchDate = document.getElementById('search-date').value;

        if (!searchName || !searchDate) {
            resultDisplay.textContent = "Please enter your name and select a date.";
            return;
        }

        // Get attendance records from localStorage
        const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

        // Find the record by name and date
        const record = attendanceRecords.find(
            rec =>
                rec.name &&
                rec.name.toLowerCase() === searchName.toLowerCase() &&
                rec.date === searchDate
        );

        if (record) {
            resultDisplay.innerHTML = `
                <strong>${record.date} - ${record.name}</strong>:<br>
                ${
                    Array.isArray(record.attendance)
                        ? record.attendance.map(att => `Period ${att.period}: ${att.status}`).join('<br>')
                        : 'No attendance data available.'
                }
            `;
        } else {
            resultDisplay.textContent = `No attendance record found for "${searchName}" on ${searchDate}.`;
        }
    });
});
