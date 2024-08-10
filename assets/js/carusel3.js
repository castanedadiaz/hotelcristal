let index = 0;

function moveSlide2(step) {
    const items = document.querySelectorAll('.carousel3-item');
    const totalItems = items.length;

    index = (index + step + totalItems) % totalItems;
    const offset = -index * 100;
    document.querySelector('.carousel3-container').style.transform = `translateX(${offset}%)`;
}

// Opcional: agregar funcionalidad automática