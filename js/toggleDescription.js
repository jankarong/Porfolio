


// Toggle description visibility
function toggleDescription(element) {
    const description = element.nextElementSibling;
    const arrow = element.querySelector('svg');

    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        arrow.classList.add('rotate-90');
    } else {
        description.classList.add('hidden');
        arrow.classList.remove('rotate-90');
    }
}

// Toggle stage visibility
function toggleStage(stageId) {
    const stage = document.getElementById(stageId);
    const arrow = document.getElementById(`arrow${stageId.slice(-1)}`);

    if (stage.classList.contains('hidden')) {
        stage.classList.remove('hidden');
        arrow.style.transform = 'rotate(90deg)';
    } else {
        stage.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Toggle section visibility
function toggleSection(element) {
    const content = element.nextElementSibling;
    const isExpanded = content.style.display !== 'none';
    content.style.display = isExpanded ? 'none' : 'block';
    const arrow = element.querySelector('.arrow');
    arrow.textContent = isExpanded ? '▼' : '▲';
}