const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
const totalSlides = carouselSlide.children.length;

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? (totalSlides - 1) : (slideIndex - 1);
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === totalSlides - 1) ? 0 : (slideIndex + 1);
  updateSlidePosition();
});

// Function to update slide position
function updateSlidePosition() {
  const slideWidth = carouselSlide.children[0].getBoundingClientRect().width;
  carouselSlide.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
      item.addEventListener('click', function() {
          this.classList.toggle('active');
      });
  });
});
