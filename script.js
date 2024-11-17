document.addEventListener('DOMContentLoaded', function() {
    // Logo click navigation (optional, just an example of handling the logo click)
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html'; // Navigates to the landing page
        });
    }

    // Backward navigation functionality for 'Back' button on individual blog pages
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            history.back(); // Goes back to the previous page
        });
    }
});
