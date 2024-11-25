// Wait for page load
document.addEventListener('DOMContentLoaded', function () {
    // Get scroll indicator element
    const scrollIndicator = document.getElementById('scrollIndicator');

    // Show scroll indicator after 1 second
    setTimeout(() => {
        scrollIndicator.classList.remove('opacity-0');
    }, 1000);
});