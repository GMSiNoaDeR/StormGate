// Добавление кнопки меню и управление выпадающим меню (только для мобильных устройств)
document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia("(max-width: 768px)").matches) { // Проверка ширины экрана
        const menuButton = document.createElement("button");
        menuButton.classList.add("menu-button");
        menuButton.textContent = "Меню";

        const header = document.querySelector("header");
        header.appendChild(menuButton);

        const nav = header.querySelector("nav");
        menuButton.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }
});
