document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent form submission
            alert('Your credentials have been saved!');  // Show the alert
            signupForm.reset();  // Clear the form fields
        });
    }

    // Add event listener for the signin form
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent form submission
            alert('You have successfully signed in!');  // Show the alert
            signinForm.reset();  // Clear the form fields
        });
    }

    // Initialize cart as an empty array or retrieve it from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart count displayed in the navbar
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
        }
    }

    // Function to add item to cart
    function addToCart(product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Function to remove item from cart by product ID
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Attach add-to-cart function to buttons
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            const productName = event.target.dataset.productName;
            const productPrice = event.target.dataset.productPrice;

            const product = { id: productId, name: productName, price: productPrice };
            addToCart(product);
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Update cart count on page load
    updateCartCount();

    // Add event listener for the search bar
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', function () {
            const searchTerm = searchBar.value.toLowerCase();
            const productList = document.querySelectorAll('.product-item');

            productList.forEach(product => {
                const productName = product.querySelector('.product-name').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
});
