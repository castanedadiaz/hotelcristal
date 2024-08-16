let currentEventSlide = 0;

function showEventSlide(index) {
    const slides = document.querySelectorAll('.event-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentEventSlide = 0;
    } else if (index < 0) {
        currentEventSlide = totalSlides - 1;
    } else {
        currentEventSlide = index;
    }

    const offset = -currentEventSlide * 100;
    document.querySelector('.event-slider').style.transform = `translateX(${offset}%)`;
}

function moveEventSlide(step) {
    showEventSlide(currentEventSlide + step);
}

// Inicia el slider en el primer slide
showEventSlide(currentEventSlide);

// Opcional: Automatizar el slider para que cambie automáticamente
setInterval(() => {
    moveEventSlide(1);
}, 10000); // Cambia cada 3 segundos