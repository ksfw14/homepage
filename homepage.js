var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
        document.getElementById("mask").classList.toggle("active");
    })
});