const navButton = document.querySelector(".hero-nav--hamburger");
const navList = document.querySelector(".hero-nav--list");

navButton.addEventListener("click", function () {
  navList.classList.toggle("show-nav-list");
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth >= 768) navList.classList.remove("show-nav-list");
});
