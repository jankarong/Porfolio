document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // 移除所有链接的点击事件默认行为
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 移除所有链接的active类
            navLinks.forEach(link => link.classList.remove('text-primary'));
        });
    });

    // 滚动监听
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // 更新导航链接状态
        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('text-primary');
            }
        });
    });
});