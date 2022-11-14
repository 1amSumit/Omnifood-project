const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const header = document.querySelector(".header");
const navBar = document.querySelector(".main-nav");
const allLink = document.querySelectorAll("a:link");

openNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

closeNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth scrolling

allLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const scrollSection = document.querySelector(href);
      scrollSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

//Sticky Nav Bar
const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSection);
