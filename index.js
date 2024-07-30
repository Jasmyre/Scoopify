const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    // console.log(e);
    if (e.isIntersecting) {
      e.target.classList.add("intersecting");
    } else {
      e.target.classList.remove("intersecting");
    }
  });
});

const element = document.querySelectorAll(".animated");
element.forEach((e) => observer.observe(e));