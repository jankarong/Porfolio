document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productItems = document.querySelectorAll('.product-item');

    const filterProducts = (category) => {
        productItems.forEach(item => {
            const itemCategories = item.dataset.category.split(' ');
            const shouldShow = category === 'all' || itemCategories.includes(category);
            item.classList.toggle('hidden', !shouldShow);
        });
    };

    const setActiveButton = (activeButton) => {
        categoryButtons.forEach(button => {
            if (button === activeButton) {
                button.classList.remove('text-gray-800', 'hover:text-blue-600', 'bg-white', 'bg-opacity-50');
                button.classList.add('text-blue-600', 'bg-blue-100');
            } else {
                button.classList.remove('text-blue-600', 'bg-blue-100');
                button.classList.add('text-gray-800', 'hover:text-blue-600', 'bg-white', 'bg-opacity-50');
            }
        });
    };

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked:', button.textContent);
            setActiveButton(button);
            filterProducts(button.dataset.category);
        });
    });

    const allButton = document.querySelector('[data-category="all"]');
    if (allButton) {
        setActiveButton(allButton);
        filterProducts('all');
    }
});