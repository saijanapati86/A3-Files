const cartItems =
    document.getElementById("cartItems");

const totalPrice =
    document.getElementById("totalPrice");

const cart = 
    JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(product => {

    total += product.price * product.quantity;

    cartItems.innerHTML += `

        <div class="cart_item>

        <img
            src="${product.image}"
            alt="${product.name}"
            class="cart_image">

        <div class="cart_details">

            <h3>${product.name}</h3>

            <p>Size: ${product.size}</p>

            <p>$${product.price}</p>

        </div>

        <div class="quality_controls">

            <button class="minus">-</button>

            <span>${product.quantity}</span>

            <button class="plus">+</button>

        </div>

    </div>

    `;
});

totalPrice.textContent = 
    "$" + total.toFixed(2);