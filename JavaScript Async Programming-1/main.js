let addToCartButton = document.querySelector('.cart_btn');
addToCartButton.addEventListener('click', function () {
    addToCartButton.textContent = 'Adding to Cart...';
    addToCartButton.disabled = true;

    setTimeout(() => {
        addToCartButton.textContent = 'Added to Cart!';
        setTimeout(() => {
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.disabled = false;
        }, 2000);
    }, 3000);
});
