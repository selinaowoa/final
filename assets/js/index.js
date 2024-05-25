//search
function toggleSearch() {
  var searchInput = document.getElementById("searchInput");

  if (searchInput.style.display === "inline-block") {
    searchInput.style.display = "none";
  } else {
    searchInput.style.display = "inline-block";
    searchInput.focus();
  }
}
document.addEventListener("click", function (event) {
  var searchBox = document.getElementById("searchBox");
  var searchInput = document.getElementById("searchInput");

  if (!searchBox.contains(event.target)) {
    searchInput.style.display = "none";
  }
});

// 照片輪播
let index = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-container img");
  const indicators = document.querySelectorAll(".indicator");

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  index = (n + slides.length) % slides.length;

  slides[index].classList.add("active");
  indicators[index].classList.add("active");

  document.querySelector(".carousel-container").style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

function currentSlide(n) {
  showSlide(n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(index);
  setInterval(nextSlide, 5000);
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var backButton = document.querySelector(".back");

  if (scrollPosition > 100) {
    backButton.style.opacity = Math.min((scrollPosition - 100) / 200, 1);
  } else {
    backButton.style.opacity = 0;
  }
});

//品牌介紹
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(".information2");
  elements.forEach((el) => observer.observe(el));
});
