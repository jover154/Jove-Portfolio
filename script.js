document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document
    .getElementById("nav-menu")
    .querySelector(".nav_links");
  navMenu.classList.toggle("active");
});
