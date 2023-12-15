document.addEventListener("DOMContentLoaded", function () {
    // Mock data for sock products
    const sockProducts = [
        { id: 1, name: "Drew Socks", price: 15.99 },
        { id: 2, name: "Travis Scott Socks", price: 20.00 },
        { id: 3, name: "OFWGKTA Socks", price: 19.99 },
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
