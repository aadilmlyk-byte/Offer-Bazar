function buyNow(productName, price) {
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", price);
    window.location.href = "checkout.html";
}

function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("product-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
