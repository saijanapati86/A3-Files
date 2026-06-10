console.log("shopping_cart.js loaded");

const cartItems =
    document.getElementById("cartItems");

const totalPrice =
    document.getElementById("totalPrice");

const emptyCart =
    document.getElementById("emptyCart");

const cartContent =
    document.getElementById("cartContent");

let cart = 
    JSON.parse(localStorage.getItem("cart")) || [];      //retrieving info from RVC.js and CC.js

function displayCart() {

    if (cart.length === 0) {

        document.getElementById("emptyCart").style.display = "block";
        document.getElementById("cartContent").style.display = "none";

        return;
    }

    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartContent").style.display = "block";
    
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

    }                                   // removed splice (cart.splice(index, 1);) as when quantity reaches 1, keeps subtracting and deletes product from cart

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function removeItem(index) {            //function to remove product from cart
    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

displayCart();