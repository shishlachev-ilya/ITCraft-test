let menuBtn = document.querySelector(".nav-menu__btn");
let navMenu = document.querySelector(".nav-menu");

let toggle = (...node) => {
    node.map(function (item) {
        item.classList.toggle("active");
    });
};

menuBtn.addEventListener("click", function () {
    toggle(this, navMenu);
});