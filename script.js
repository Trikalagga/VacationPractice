document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the signup form
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form submission
        alert('Your credentials have been saved!');  // Show the alert
        signupForm.reset();  // Clear the form fields
    });

    // Add event listener for the signin form
    const signinForm = document.getElementById('signinForm');
    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form submission
        alert('You have successfully signed in!');  // Show the alert
        signinForm.reset();  // Clear the form fields
    });
});
