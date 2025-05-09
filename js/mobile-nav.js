// Enhanced mobile navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    // Toggle menu with enhanced animation
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
        navbarMenu.classList.toggle('show');

        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
        if (!isClickInside && !navbarMenu.classList.contains('hidden') && window.innerWidth < 768) {
            navbarMenu.classList.add('hidden');
            navbarMenu.classList.remove('show');
            navbarToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            navbarMenu.classList.remove('hidden');
            navbarMenu.classList.remove('show');
        } else {
            navbarMenu.classList.add('hidden');
            navbarMenu.classList.remove('show');
            navbarToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Set current page indicator
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('#navbar-menu a');

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath) {
            // Check if the current path includes the link path or if it's the home page
            if ((currentPath.includes(linkPath) && linkPath !== '/index.html' && linkPath !== '../index.html') ||
                (linkPath.includes('index.html') && (currentPath === '/' || currentPath.endsWith('index.html')))) {
                link.setAttribute('aria-current', 'page');
            }
        }
    });
});
