

let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".list-items").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navList.classList.remove("active");
}))