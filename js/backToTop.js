document.addEventListener('DOMContentLoaded', function () {
    const backToTopContainer = document.getElementById('backToTopContainer');

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopContainer.style.opacity = '1';
        } else {
            backToTopContainer.style.opacity = '0';
        }
    });

    // Initial state
    backToTopContainer.style.opacity = window.scrollY > 300 ? '1' : '0';

    backToTopContainer.addEventListener('click', function (e) {
        // Add ripple effect
        const ripple = document.createElement('div');
        const rect = backToTopContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';

        backToTopContainer.appendChild(ripple);

        // No need to add active class anymore since we're using hover

        // Remove ripple after animation completes
        setTimeout(() => ripple.remove(), 600);

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
