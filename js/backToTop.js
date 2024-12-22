document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const backToTopContainer = document.getElementById('backToTopContainer');
    
    backToTopContainer.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = backToTopButton.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';
        
        backToTopButton.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
