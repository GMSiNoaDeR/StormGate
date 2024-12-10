const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
    if (sideMenu.style.left === "0px") {
        sideMenu.style.left = "-300px";
    } else {
        sideMenu.style.left = "0px";
    }
});
