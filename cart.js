// ----------------------------------------------
// LOAD CART FROM STORAGE
// ----------------------------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ----------------------------------------------
// UPDATE CART COUNT IN NAVBAR
// ----------------------------------------------
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cartCount").innerText = count;
}
updateCartCount();

// ----------------------------------------------
// ADD TO CART FUNCTION
// ----------------------------------------------
function addToCart(product) {

    // product.price = parseInt(product.price.toString().replace("₹", ""));

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart`);
}

// ----------------------------------------------
// REMOVE ITEM
// ----------------------------------------------
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// ----------------------------------------------
// CHANGE QUANTITY
// ----------------------------------------------
function changeQuantity(id, action) {
    cart = cart.map(item => {
        if (item.id === id) {
            if (action === "increase") item.quantity++;
            if (action === "decrease" && item.quantity > 1) item.quantity--;
        }
        return item;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// ----------------------------------------------
// LOAD CART ITEMS INTO CART PAGE
// ----------------------------------------------
function loadCartItems() {
    const container = document.getElementById("cartItems");
    const totalPriceBox = document.getElementById("totalPrice");

    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" />
                <div class="info">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>

                    <div class="qty-box">
                        <button onclick="changeQuantity(${item.id}, 'decrease')">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 'increase')">+</button>
                    </div>

                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });

    totalPriceBox.innerText = "₹" + total;
}
