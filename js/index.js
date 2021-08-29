// console.log("welcome");
const hamburger = document.getElementById("toggle");
const navLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
})