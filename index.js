document.addEventListener('mousemove', function(e) {
    const glow = document.querySelector('.glow');
    const x = e.pageX;
    const y = e.pageY;
    glow.style.transform = `translate(${x}px, ${y}px)`;
    });

    const container = document.getElementById("textBox");
    // 更新 CSS 变量的值
    function updateContainerWidth() {
        const containerWidth = `${container.clientWidth}px`;
        container.style.setProperty('--container-width', containerWidth);
        console.log('--container-width:', containerWidth);
    }

    // 监听窗口大小变化事件
    window.addEventListener('resize', updateContainerWidth);

    // 页面加载完成时更新一次容器的宽度
    updateContainerWidth();
