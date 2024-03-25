const iconMenu = document.querySelector("#iconMenu");
const menu = document.querySelector("#menu-nesting");
const body = document.querySelector("#body");
const links = document.querySelectorAll(".links");
iconMenu.addEventListener("click", openMenu);

function openMenu() {
  menu.classList.toggle("translate-x-[100%]");
  body.classList.toggle("overflow-hidden");
  iconMenu.classList.toggle("stroke-white");
  console.log("click")
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("translate-x-[100%]");
    body.classList.toggle("overflow-hidden");
  });
});