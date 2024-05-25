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

// member.js
const signUp = document.getElementById("sign-up"),
  signIn = document.getElementById("sign-in"),
  loginIn = document.getElementById("login-in"),
  loginUp = document.getElementById("login-up");

signUp.addEventListener("click", () => {
  loginIn.classList.remove("block");
  loginUp.classList.remove("none");

  loginIn.classList.toggle("none");
  loginUp.classList.toggle("block");
});

signIn.addEventListener("click", () => {
  loginIn.classList.remove("none");
  loginUp.classList.remove("block");

  loginIn.classList.toggle("block");
  loginUp.classList.toggle("none");
});
