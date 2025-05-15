// Initialize AOS with optimized settings
document.addEventListener('DOMContentLoaded', function () {
    // Only initialize AOS if it exists
    if (typeof AOS !== 'undefined') {
        // Check if device is mobile
        const isMobile = window.innerWidth < 768;

        AOS.init({
            duration: isMobile ? 0 : 600, // No animation on mobile
            once: true,
            offset: 50,
            disable: isMobile // Disable completely on mobile for better performance
        });

        // Remove all AOS attributes on mobile for better performance
        if (isMobile) {
            document.querySelectorAll('[data-aos]').forEach(el => {
                el.removeAttribute('data-aos');
                el.removeAttribute('data-aos-duration');
                el.removeAttribute('data-aos-delay');
            });
        }
    }
});

// Back to top functionality
document.addEventListener('DOMContentLoaded', function () {
    const backToTopContainer = document.getElementById('backToTopContainer');

    if (backToTopContainer) {
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

        // Click handler
        backToTopContainer.addEventListener('click', function (e) {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('hidden');
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            navbarToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInside = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
            if (!isClickInside && !navbarMenu.classList.contains('hidden') && window.innerWidth < 768) {
                navbarMenu.classList.add('hidden');
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Handle window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) {
                navbarMenu.classList.remove('hidden');
            } else {
                navbarMenu.classList.add('hidden');
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// Zoomable images
document.addEventListener('DOMContentLoaded', function () {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');

    if (zoomableImages.length && zoomOverlay && zoomedImage) {
        zoomableImages.forEach(img => {
            img.addEventListener('click', function (e) {
                e.preventDefault();
                zoomOverlay.classList.add('active');
                zoomedImage.src = this.src;
            });
        });

        // Close on overlay click
        zoomOverlay.addEventListener('click', function (e) {
            if (e.target === zoomOverlay) {
                this.classList.remove('active');
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && zoomOverlay.classList.contains('active')) {
                zoomOverlay.classList.remove('active');
            }
        });
    }
});

// Scroll navigation highlighting
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (sections.length && navLinks.length) {
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                const href = link.getAttribute('href');
                if (href && href.includes(current)) {
                    link.classList.add('text-primary');
                }
            });
        });
    }
});
