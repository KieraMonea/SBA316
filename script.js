document.addEventListener("DOMContentLoaded", function () {
    // Mock data for sock products
    const sockProducts = [
        { id: 1, name: "Cotton Socks", price: 10.99 },
        { id: 2, name: "Wool Socks", price: 14.99 },
        { id: 3, name: "Sports Socks", price: 12.99 },
    ];

    const productListElement = document.getElementById("product-list");
    const productDetailsElement = document.getElementById("product-details");
    const orderForm = document.getElementById("order-form");

    // Function to render product cards
    function renderProductCards() {
        productListElement.innerHTML = "";
        sockProducts.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            card.addEventListener("click", () => showProductDetails(product));
            productListElement.appendChild(card);
        });
    }

    // Function to show product details
    function showProductDetails(product) {
        productDetailsElement.innerHTML = `<h2>${product.name}</h2><p>Price: $${product.price.toFixed(2)}</p>`;
    }

    // Event listener for form submission
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const quantity = document.getElementById("quantity").value;
        const email = document.getElementById("email").value;

        // Place order logic

        alert(`Order placed!\nQuantity: ${quantity}\nEmail: ${email}`);
    });

    // Initial rendering of product cards
    renderProductCards();
});
