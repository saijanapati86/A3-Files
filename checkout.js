// Selecting Payment Option

let selectedPaymentMethod = null;

const paymentButtons =
    document.querySelectorAll(".payment_option");

        paymentButtons.forEach((button) => {

            button.addEventListener("click", () => {

                paymentButtons.forEach((btn) => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                selectedPaymentMethod = button.textContent.trim();

                document.getElementById("paymentError").textContent = "";

            });

        });


        const payButton =
            document.querySelector(".payment_btn");

        payButton.addEventListener("click", (e) => {

            e.preventDefault();

            if (!selectedPaymentMethod) {
                document.getElementById("paymentError").textContent =
                    "Please Select a Payment Method*";
                return;

            }

            window.location.href = "final.html";
        });

