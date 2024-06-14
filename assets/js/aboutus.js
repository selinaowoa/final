// aboutus.js

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      card.classList.add("flipped");
    });

    card.addEventListener("mouseleave", function () {
      card.classList.remove("flipped");
    });
  });
});
