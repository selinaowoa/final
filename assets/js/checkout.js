function redirectToCheckout() {
    const confirmation = confirm("結帳成功");
    if (confirmation) {
        window.location.href = "checkout.html";
    }
}
