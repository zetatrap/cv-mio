// Pequeña animación en el título principal
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.info h1');
    title.style.transition = 'transform 0.5s';
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
    });
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });
});
