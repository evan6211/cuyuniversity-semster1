// menu mobile navbar
document.addEventListener("DOMContentLoaded", () => {
  const menubtn = document.getElementById("menubtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menubtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-x-full");
  });
});