document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-slide video').forEach(video => {
        video.addEventListener('mouseenter', () => video.play());
        video.addEventListener('mouseleave', () => video.pause());
    });

    // Audio play/pause on button click
    document.querySelectorAll('.play-button').forEach(playButton => {
        playButton.addEventListener('click', function () {
            const audio = this.nextElementSibling; // Get the adjacent audio element
            if (audio.paused) {
                audio.play().then(() => {
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                }).catch(error => {
                    console.log("Audio play failed: ", error);
                });
            } else {
                audio.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });
});
