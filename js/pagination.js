// Global variables
let currentPage = 1;
const itemsPerPage = 4;
let currentCategory = 'all';

// Initialization function
function init() {
    showAllItems();
    setupPagination();
    showPage(currentPage);
}

// Show all items
function showAllItems() {
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        item.style.removeProperty('display');
    });
}

// Display items for the specified page
function showPage(page) {
    const items = document.querySelectorAll('.product-item');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let visibleCount = 0;
    items.forEach((item, index) => {
        if (currentCategory === 'all' || item.dataset.category.includes(currentCategory)) {
            if (visibleCount >= startIndex && visibleCount < endIndex) {
                item.style.removeProperty('display');
            } else {
                item.style.display = 'none';
            }
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
}

// Set up pagination buttons
function setupPagination() {
    const items = document.querySelectorAll('.product-item');
    let visibleItemsCount = 0;
    items.forEach(item => {
        if (currentCategory === 'all' || item.dataset.category.includes(currentCategory)) {
            visibleItemsCount++;
        }
    });

    const totalPages = Math.ceil(visibleItemsCount / itemsPerPage);

    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.classList.add('px-3', 'py-1', 'mx-4', 'text-gray-800', 'hover:text-primary', 'text-sm', 'md:text-base', 'lg:text-lg');
        if (i === currentPage) {
            button.classList.add('text-primary');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
            updatePaginationButtons();
        });
        paginationElement.appendChild(button);
    }
}

// Update pagination button states
function updatePaginationButtons() {
    const buttons = document.querySelectorAll('#pagination button');
    buttons.forEach((button, index) => {
        if (index + 1 === currentPage) {
            button.classList.add('text-primary');
            button.classList.remove('text-gray-800');
        } else {
            button.classList.remove('text-primary');
            button.classList.add('text-gray-800');
        }
    });
}

// Filter items based on category
function filterItems(category) {
    currentCategory = category;
    currentPage = 1;
    setupPagination();
    showPage(currentPage);
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add event listeners to category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterItems(category);
    });
});