/**
 * Enhanced Mobile Navigation
 * Provides improved functionality and animations for mobile navigation
 */
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (!navbarToggle || !navbarMenu) return;
    
    // Set initial state
    if (window.innerWidth < 768) {
        navbarMenu.classList.add('hidden');
        navbarToggle.setAttribute('aria-expanded', 'false');
    }
    
    // Add animation classes to menu items
    const menuItems = navbarMenu.querySelectorAll('ul li');
    menuItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
    
    // Toggle menu with animation
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
        navbarMenu.classList.toggle('active');
        
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
        if (!isClickInside && !navbarMenu.classList.contains('hidden') && window.innerWidth < 768) {
            navbarMenu.classList.add('hidden');
            navbarMenu.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navbarMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navbarMenu.classList.add('hidden');
                navbarMenu.classList.remove('active');
                navbarToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            navbarMenu.classList.remove('hidden');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            navbarMenu.classList.add('hidden');
            navbarToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
