let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  currentIndex += direction;

  // Se chegar ao final, vai para o início
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Se chegar ao início, vai para o final
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}