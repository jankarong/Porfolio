document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const highlightColor = '#406EE3'; // 蓝色，您可以更改为其他颜色
    const defaultColor = ''; // 默认颜色（空字符串表示使用默认样式）

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // 重置所有链接的颜色
            navLinks.forEach(l => l.style.color = defaultColor);

            // 设置被点击链接的颜色
            this.style.color = highlightColor;
        });
    });

    // 初始化：高亮当前页面对应的导航项（如果有的话）
    const currentPath = window.location.hash;
    if (currentPath) {
        const activeLink = document.querySelector(`nav ul li a[href="${currentPath}"]`);
        if (activeLink) {
            activeLink.style.color = highlightColor;
        }
    }
});