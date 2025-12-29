const addToCart = document.querySelector(".add-to-cart");

const product = {

}

addToCart.addEventListener("click", async () => {
    addToCart.disabled = true;

    const originalText = addToCart.textContent;
    addToCart.textContent = "Processing...";

    try {
        const response = await window.mockBackend.addToCart(product);

        if(response.status === 200) {
            addToCart.textContent = "Added!";
            alert("Success! Items Added to the Cart.")
        }
    } catch (error) {
        console.error(error);

        alert("Connection failed, try again");
        addToCart.disabled = false;
    addToCart.textContent = originalText;

    }
});



