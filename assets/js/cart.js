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

//delete
document.addEventListener("DOMContentLoaded", function () {
  const deleteLinks = document.querySelectorAll(".delete-link");
  const quantityInputs = document.querySelectorAll(".quantity-input");

  deleteLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const row = link.parentElement.parentElement;
      const productId = row.getAttribute("data-id");
      row.remove();
      recalculateTotal();
    });
  });

  quantityInputs.forEach((input) => {
    input.addEventListener("input", function () {
      recalculateSubtotal(input);
      recalculateTotal();
    });
  });

  // 小計
  function recalculateSubtotal(input) {
    const row = input.parentElement.parentElement;
    const price = parseFloat(row.children[2].innerText.slice(1));
    const quantity = parseInt(input.value);
    const subtotal = price * quantity;
    row.children[4].innerText = `$${subtotal.toFixed(2)}`;
  }

  // 總計
  function recalculateSubtotal(input) {
    const row = input.parentElement.parentElement;
    const priceText = row.children[2].innerText.slice(1);
    const price = parseFloat(priceText) || 0;
    const quantity = parseInt(input.value) || 0;
    const subtotal = price * quantity;
    row.children[4].innerText = `$${subtotal.toFixed(2)}`;
  }

  function recalculateTotal() {
    let total = 0;
    document.querySelectorAll("tr[data-id]").forEach((row) => {
      const subtotalText = row.children[4].innerText.slice(1);
      const subtotal = parseFloat(subtotalText) || 0;
      total += subtotal;
    });
    document.getElementById("totalAmount").innerText = `$${total.toFixed(2)}`;
  }
});

function redirectToCheckout() {
  window.location.href = "checkout.html";
}
