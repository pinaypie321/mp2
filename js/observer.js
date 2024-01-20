const sections = document.querySelectorAll(".abt");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-abt", entry.isIntersecting);
      //   if (entry.isIntersecting) {
      //     observer.unobserve(entry.target);
      //   }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
