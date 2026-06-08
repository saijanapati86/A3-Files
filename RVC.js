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
