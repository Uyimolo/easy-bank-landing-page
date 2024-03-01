// toggle menu
const menuIconsContainer = document.querySelector(".menu-icons");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const navBar = document.querySelector("nav");
//general function to toggle class 
const toggleClass = (...args) => {
  args.forEach((arg) => arg.classList.toggle("active"));
};

// toggle navbar
menuIconsContainer.addEventListener("click", () => {
  toggleClass(openButton, closeButton, navBar);
});
