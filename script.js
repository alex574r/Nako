document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA) ---
    const header = document.querySelector('.main-header');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('menu-open');
        });
    }

    // --- LÓGICA DEL CARRUSEL DE PRODUCTOS ---
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');

        if (slides.length > 0) {
            let currentIndex = 0;

            const updateCarousel = () => {
                const containerWidth = track.parentElement.getBoundingClientRect().width;
                const slideWidth = slides[0].getBoundingClientRect().width;
                // Calcula cuántos slides caben en el contenedor, redondeando al más cercano
                const slidesInView = Math.round(containerWidth / slideWidth);

                if (currentIndex > slides.length - slidesInView) {
                    currentIndex = slides.length - slidesInView;
                }
                if (currentIndex < 0) {
                    currentIndex = 0;
                }
                const offset = -currentIndex * slideWidth;
                track.style.transform = `translateX(${offset}px)`;
            };

            nextButton.addEventListener('click', () => {
                currentIndex++;
                updateCarousel();
            });

            prevButton.addEventListener('click', () => {
                currentIndex--;
                updateCarousel();
            });

            window.addEventListener('resize', updateCarousel);
            updateCarousel(); // Llama una vez al inicio
        }
    }
});