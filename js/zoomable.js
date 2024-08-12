document.addEventListener('DOMContentLoaded', function () {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');

    zoomableImages.forEach(img => {
        img.addEventListener('click', function (e) {
            e.preventDefault();
            zoomedImage.src = this.src;
            zoomOverlay.classList.add('active');
        });
    });

    zoomOverlay.addEventListener('click', function () {
        this.classList.remove('active');
    });
});