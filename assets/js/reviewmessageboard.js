//header search function
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

//header member
let dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseover', function () {
    let dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseout', function () {
    let dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});

//top


