//cart
function addToCart() {
    alert('已成功加入購物車！');
}

function showCategory(category, event) {
    event.preventDefault(); // 阻止事件的預設行為（例如跟隨連結）

    let products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'none';
    });

    if (category === 'all') {
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        let selectedProducts = document.querySelectorAll('.' + category);
        selectedProducts.forEach(product => {
            product.style.display = 'block';
        });
    }
}

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








