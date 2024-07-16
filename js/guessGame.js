let selectedImages = new Set();

function selectImage(container) {
    console.log('selectImage called', container);
    const overlay = container.querySelector('.absolute');
    const checkmark = container.querySelector('.fa-check');

    if (selectedImages.has(container)) {
        selectedImages.delete(container);
        overlay.classList.remove('bg-opacity-30');
        overlay.classList.add('bg-opacity-0');
        checkmark.classList.add('opacity-0');
        checkmark.classList.remove('opacity-100');
    } else {
        selectedImages.add(container);
        overlay.classList.add('bg-opacity-30');
        overlay.classList.remove('bg-opacity-0');
        checkmark.classList.remove('opacity-0');
        checkmark.classList.add('opacity-100');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', function () {
        const totalImages = document.querySelectorAll('.aspect-square').length;
        const correctPercentage = (selectedImages.size / totalImages) * 100;

        const resultDiv = document.getElementById('result');
        const resultText = resultDiv.querySelector('p:first-child');
        resultText.textContent = `You got ${correctPercentage.toFixed(2)}% correct!`;
        resultDiv.classList.remove('hidden');
    });

    document.querySelectorAll('.aspect-square').forEach(container => {
        container.addEventListener('click', function () {
            selectImage(this);
        });
    });
});