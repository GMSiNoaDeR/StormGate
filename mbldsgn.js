// Добавление кнопки меню и управление выпадающим меню
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.textContent = "Меню";

    const header = document.querySelector("header");
    header.appendChild(menuButton);

    const nav = header.querySelector("nav");
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
