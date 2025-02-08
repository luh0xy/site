// JavaScript (script.js)

document.addEventListener('mousemove', function(e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const cursor = document.querySelector('.cursor-effect');

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    cursor.classList.add('active');

    setTimeout(function() {
        cursor.classList.remove('active');
    }, 400);
});

