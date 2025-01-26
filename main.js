// Predefined credentials
const validCredentials = {
    username: "faculty123",
    password: "securepassword",
};

// Select the form element
const form = document.querySelector('form');

// Add an event listener to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of the input fields
    const facultyId = document.getElementById('faculty_id').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (facultyId === validCredentials.username && password === validCredentials.password) {
        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Show an error message
        alert('Invalid Faculty ID or Password. Please try again.');
    }
});
