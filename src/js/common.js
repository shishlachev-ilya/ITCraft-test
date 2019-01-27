let menuBtn = document.querySelector(".nav-menu__btn");
let navMenu = document.querySelector(".nav-menu");

let toggle = (node) => {
  node.classList.toggle("active");
};

menuBtn.addEventListener("click", function () {
  toggle(this);
  toggle(navMenu);
});

