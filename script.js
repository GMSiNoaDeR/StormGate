// Открыть меню
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    var button = document.getElementById("menu-toggle");

    if (menu.style.width === "250px") {
        closeMenu();
    } else {
        menu.style.width = "250px";
        button.classList.add("open");
    }
}

// Закрыть меню
function closeMenu() {
    var menu = document.getElementById("side-menu");
    var button = document.getElementById("menu-toggle");

    menu.style.width = "0";
    button.classList.remove("open");
}

// Открыть меню при наведении мышки
document.getElementById("side-menu").addEventListener("mouseover", function() {
    var menu = document.getElementById("side-menu");
    var button = document.getElementById("menu-toggle");
    if (menu.style.width === "0px") {
        menu.style.width = "250px";
        button.classList.add("open");
    }
});

// Закрыть меню, если курсор уходит с панели
document.getElementById("side-menu").addEventListener("mouseleave", function() {
    var menu = document.getElementById("side-menu");
    var button = document.getElementById("menu-toggle");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
        button.classList.remove("open");
    }
});
