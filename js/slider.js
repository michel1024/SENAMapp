// Funcionalidad del slider de horarios reproducción automática y navegación manual
// que las imagenes pasen con una animacion suave que se vea el movomoento de un lado a otro
// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".slide");
//     const prevButton = document.getElementById("prevSlide");
//     const nextButton = document.getElementById("nextSlide");
//     let currentIndex = 0;
//     let autoSlideInterval;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = (i === index) ? "block" : "none";
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % slides.length;
//         showSlide(currentIndex);
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//         showSlide(currentIndex);
//     }

//     function startAutoSlide() {
//         autoSlideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
//     }

//     function stopAutoSlide() {
//         clearInterval(autoSlideInterval);
//     }

//     prevButton.addEventListener("click", () => {
//         stopAutoSlide();
//         prevSlide();
//         startAutoSlide();
//     });

//     nextButton.addEventListener("click", () => {
//         stopAutoSlide();
//         nextSlide();
//         startAutoSlide();
//     });

//     // Iniciar el slider
//     showSlide(currentIndex);
//     startAutoSlide();
// });


document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        const offset = -index * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Iniciar
    showSlide(currentIndex);
    startAutoSlide();
});

