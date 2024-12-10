document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector(".hero::before");
    if (hero) {
        hero.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Эффект параллакса
    }
});