var slider = tns({
  container: ".testimonials__slider",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  mouseDrag: true,
});

var slider = tns({
  container: ".client__slider",
  items: 4,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  mouseDrag: true,
  gutter: 10,
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
  }
});

const stats = document.querySelector(".stats");
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / 200;

        if (count < target) {
          counter.innerText = Math.trunc(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
});

observer.observe(stats);

AOS.init();

const servicesItems = document.querySelectorAll(".services__grid__item");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      servicesItems.forEach((item, index) => {
        let delay = (index + 1) * 150;
        item.setAttribute("data-aos-delay", delay);
      });
    }
  });
});
servicesItems.forEach((item) => {
  observer2.observe(item);
});
