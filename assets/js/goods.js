//cart
function addToCart() {
    alert('已成功加入購物車！');
}

//分類
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

