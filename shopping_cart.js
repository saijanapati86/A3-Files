console.log("shopping_cart.js loaded");

const cartItems =
    document.getElementById("cartItems");

const totalPrice =
    document.getElementById("totalPrice");

let cart = 
    JSON.parse(localStorage.getItem("cart")) || [];      //retrieving info from RVC.js and CC.js

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total +=
            product.price * product.quantity;

        cartItems.innerHTML += `

        <div class="cart_item">

            <div class="product_section">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="cart_image">

            <div class="product_info">

                <h3>${product.name}</h3>
                <p>Size: ${product.size}</p>

                <button
                    class="remove_button"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        </div>

        <p>$${product.price.toFixed(2)}</p>

            <div class="quantity_controls">

                <button onclick="decreaseQuantity(${index})">

                    -

                </button>

                <span>${product.quantity}</span>

                <button onclick="increaseQuantity(${index})">

                    +

                </button>

            </div>

        </div>

    `;
});

totalPrice.textContent =
    "$" + total.toFixed(2);

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );
}

function increaseQuantity(index) {      //function to increase quantity of product
    cart[index].quantity++;
    displayCart();
}

function decreaseQuantity(index) {      //function to decrease quantity of product
    if (cart[index].quantity > 1) {
        cart[index].quantity--;

    } else {
        cart.splice(index, 1);
    }

    displayCart();
}

function removeItem(index) {            //function to remove product from cart
    cart.splice(index, 1);
    displayCart();
}

displayCart();