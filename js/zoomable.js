document.addEventListener('DOMContentLoaded', function () {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');

    // Add loading indicator and close button to overlay
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    zoomOverlay.appendChild(loadingDiv);

    const closeButton = document.createElement('div');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '×';
    zoomOverlay.appendChild(closeButton);

    zoomableImages.forEach(img => {
        img.addEventListener('click', function (e) {
            e.preventDefault();
            loadingDiv.style.display = 'block';
            zoomedImage.style.display = 'none';
            zoomOverlay.classList.add('active');

            zoomedImage.src = this.src;
            zoomedImage.onload = function () {
                loadingDiv.style.display = 'none';
                zoomedImage.style.display = 'block';
            };
        });
    });

    // Close overlay when clicking outside image or close button
    closeButton.addEventListener('click', () => {
        zoomOverlay.classList.remove('active');
    });

    zoomOverlay.addEventListener('click', function (e) {
        if (e.target === zoomOverlay) {
            this.classList.remove('active');
        }
    });

    // Handle keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && zoomOverlay.classList.contains('active')) {
            zoomOverlay.classList.remove('active');
        }
    });
});