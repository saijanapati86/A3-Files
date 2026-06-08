// Image View

const mainImage =
    document.getElementById("mainImage");

const thumbnails =
    document.querySelectorAll(".cc_thumbnail");

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        mainImage.src = thumbnail.src;

        thumbnails.forEach((img) => {
            img.classList.remove("active");
        });

        thumbnail.classList.add("active");

    });

});

// Selecting a Size Option

let selectedSize = null;

const sizeButtons =
    document.querySelectorAll(".cc_size_buttons");

sizeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        sizeButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedSize = button.textContent;

        document.getElementById("sizeError").textContent = "";

    });

});

// Add to Cart

const cartButton = 
    document.querySelector(".cc_cart_button");

cartButton.addEventListener("click", () => {

    if (!selectedSize) {

        document.getElementById("sizeError").textContent =
            "Please Select A Size*";

        return;
    }

    alert(
        "Added Chocolate Cake (" +
        selectedSize +
        ") to cart."
    );

});