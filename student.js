// Predefined valid credentials
const validStudentCredentials = {
    studentId: "student001",
    password: "mypassword"
};

// Select the form element
const form = document.querySelector('form');

// Add an event listener to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of the input fields
    const studentId = document.getElementById('student_id').value;
    const password = document.getElementById('password').value;

    // Validate the credentials
    if (studentId === validStudentCredentials.studentId && password === validStudentCredentials.password) {
        // Redirect to the student dashboard
        window.location.href = 'student.html';
    } else {
        // Display an error message
        alert('Invalid Student ID or Password. Please try again.');
    }
});
