document.addEventListener('DOMContentLoaded', (event) => {
    const cursor = document.getElementById('custom-cursor');
    const defaultCursor = document.getElementById('default-cursor');
    const projectCards = document.querySelectorAll('.effect-pulse');
    let cursorTimeout;
    let lastKnownMousePosition = { x: 0, y: 0 };
    let scrollTimeout;

    function isMouseOverCard(mouseX, mouseY) {
        for (const card of projectCards) {
            const rect = card.getBoundingClientRect();
            if (
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom
            ) {
                return true;
            }
        }
        return false;
    }

    function isMouseOverZoomable(mouseX, mouseY) {
        const zoomableImages = document.querySelectorAll('.zoomable');
        for (const img of zoomableImages) {
            const rect = img.getBoundingClientRect();
            if (
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom
            ) {
                return true;
            }
        }
        return false;
    }

    function updateCursor() {
        if (isMouseOverZoomable(lastKnownMousePosition.x, lastKnownMousePosition.y)) {
            // 在可缩放图片上时，隐藏所有光标并显示系统放大镜光标
            cursor.classList.add('hidden');
            cursor.classList.remove('flex');
            defaultCursor.classList.add('hidden');
            defaultCursor.classList.remove('flex');
            document.body.style.cursor = 'zoom-in';
        } else if (isMouseOverCard(lastKnownMousePosition.x, lastKnownMousePosition.y)) {
            // 在项目卡片上时，显示圆形光标
            cursor.classList.remove('hidden');
            cursor.classList.add('flex');
            defaultCursor.classList.add('hidden');
            defaultCursor.classList.remove('flex');
            document.body.style.cursor = 'none';
        } else {
            // 其他情况，显示默认光标
            cursor.classList.add('hidden');
            cursor.classList.remove('flex');
            defaultCursor.classList.remove('hidden');
            defaultCursor.classList.add('flex');
            document.body.style.cursor = '';
        }
    }

    document.addEventListener('mousemove', (e) => {
        lastKnownMousePosition.x = e.clientX;
        lastKnownMousePosition.y = e.clientY;
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            defaultCursor.style.left = e.clientX + 'px';
            defaultCursor.style.top = e.clientY + 'px';
            updateCursor();
        });
    });

    // 初始显示默认光标
    defaultCursor.classList.remove('hidden');
    defaultCursor.classList.add('flex');

    // 优化滚动事件监听
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(() => {
            updateCursor();
        });
    }, { passive: true });

    // 键盘事件监听
    document.addEventListener('keydown', (e) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'].includes(e.code)) {
            if (scrollTimeout) {
                cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = requestAnimationFrame(() => {
                updateCursor();
            });
        }
    });

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!isMouseOverZoomable(lastKnownMousePosition.x, lastKnownMousePosition.y)) {
                cursor.classList.remove('hidden');
                cursor.classList.add('flex');
                defaultCursor.classList.add('hidden');
                defaultCursor.classList.remove('flex');
                document.body.style.cursor = 'none';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!isMouseOverZoomable(lastKnownMousePosition.x, lastKnownMousePosition.y)) {
                cursor.classList.add('hidden');
                cursor.classList.remove('flex');
                defaultCursor.classList.remove('hidden');
                defaultCursor.classList.add('flex');
                document.body.style.cursor = '';
            }
        });
    });
});