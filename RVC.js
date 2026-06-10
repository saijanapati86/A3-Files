console.log("RVC.js loaded");

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");

console.log("Main image:", mainImage);
console.log("Thumbnails found:", thumbnails.length);

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        console.log("Clicked:", thumbnail.src);

        mainImage.src = thumbnail.src;

        thumbnails.forEach((img) => {
            img.classList.remove("active");
        });

        thumbnail.classList.add("active");

    });

});

// Size Options

let selectedSize = null;

const sizeButtons =
    document.querySelectorAll(".rvc_size_buttons");

console.log(sizeButtons.length);

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {
        sizeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedSize = button.textContent;

        document.getElementById("sizeError").textContent = "";

    });

});

// Allowing Add to Cart

const cartButton = 
    document.querySelector(".cart_button");

cartButton.addEventListener("click", () => {

    if (!selectedSize) {

        document.getElementById("sizeError").textContent =
            "Please Select A Size*";

        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
        item =>
            item.name === "Red Velvet" &&
            item.size === selectedSize
        );

    if (existingProduct) {
        existingProduct.quantity++;
    }
    else {
        cart.push({
            name: "Red Velvet",
            price: 45.99,
            size: selectedSize,
            quantity: 1,
            image: "RVC.1.jpg"
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added To Cart");

});

// OG Add to Cart

/*const cartButton =
    document.querySelector(".cart_button");

cartButton.addEventListener("click", () => {

    if (!selectedSize) {

        document.getElementById("sizeError").textContent =
            "Please Select A Size*";

        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
        item =>
            item.name === "Red Velvet" &&
            item.size === selectedSize
        );

    if (existingProduct) {
        
        alert("Added to the cart successfully");

        return;

    }
    else {
        cart.push({
            name: "Red Velvet",
            price: 45.99,
            size: selectedSize,
            quantity: 1,
            image: "RVC.1.jpg"
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added To Cart")

});*/