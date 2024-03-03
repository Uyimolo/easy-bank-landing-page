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


// :root {
//     --Mobile-Container-padding: 5rem;
//   }
//   header {
//     padding: 3rem var(--Mobile-Container-padding);
//   }

//   .hero {
//     position: relative;
//     width: 130vw;
//   }

//   .blank {
//     /* z-index: 1; */
//   }

//   .hero-img-container {
//     transform: translateX(1rem);
//     background-size: cover;
//     background-position: bottom;
//     background-size: 80%;
//   }

//   .hero-img {
//     position: relative;
//     z-index: 4;
//     top: 3rem;
//     /* left: -8rem; */
//     max-width: 700px;
//   }

//   .article-tab-text {
//     padding: 2rem;
//   }

