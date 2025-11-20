
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
}

function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

setInterval(nextSlide, 3000);

const slider = document.querySelector(".deals-slider");
const nextBtn = document.querySelector(".next-deal");
const prevBtn = document.querySelector(".prev-deal");

nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
});
