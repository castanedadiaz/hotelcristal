let index2 = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel2-item');
    const totalItems = items.length;

    index = (index + step + totalItems) % totalItems;
    const offset = -index * 100;
    document.querySelector('.carousel2-container').style.transform = `translateX(${offset}%)`;
}

// Opcional: agregar funcionalidad automática