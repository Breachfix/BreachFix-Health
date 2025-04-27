// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("savedCart")) || [];
let isDrawerOpen = false;

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("savedCart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(id, name, price, button) {
    const productEl = button.closest('.product');
    if (!productEl) return;
  
    const quantityInput = productEl.querySelector('.quantity');
    const quantity = parseInt(quantityInput.value) || 1;
  
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ id, name, price, quantity });
    }
  
    saveCart();
    renderCart();
  }

// Remove item from cart
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  renderCart();
}

// Render cart in both drawer and main cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const drawerItems = document.getElementById("drawer-items");
  const totalSpan = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");
  const cartEmpty = document.getElementById("cart-empty");

  // Clear current displays
  [cartItems, drawerItems].forEach(el => el && (el.innerHTML = ""));
  let total = 0, count = 0;

  if (cart.length === 0 && cartEmpty) {
    cartEmpty.style.display = 'block';
    totalSpan.textContent = "0.00";
    if (cartCount) cartCount.textContent = "0";
    return;
  }

  if (cartEmpty) cartEmpty.style.display = 'none';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    count += item.quantity;

    // Drawer item
    if (drawerItems) {
      const li = document.createElement("li");
      li.className = "flex justify-between items-center py-2 border-b text-sm";
      li.innerHTML = `
        <div>
          <p>${item.quantity}x ${item.name}</p>
          <p class="text-gray-500">$${item.price.toFixed(2)} ea</p>
        </div>
        <button class="text-red-600 hover:text-red-800" onclick="removeFromCart('${item.name}')">Remove</button>
      `;
      drawerItems.appendChild(li);
    }

    // Main cart list (if exists)
    if (cartItems) {
      const li = document.createElement("li");
      li.className = "flex justify-between items-start border-b pb-2 gap-2";
      li.innerHTML = `
        <div>
          <p class="font-medium">${item.name}</p>
          <p class="text-sm text-gray-500">Qty: ${item.quantity} @ $${item.price.toFixed(2)}</p>
        </div>
        <button class="text-red-500 hover:text-red-700 text-sm" onclick="removeFromCart('${item.name}')">Remove</button>
      `;
      cartItems.appendChild(li);
    }
  });

  totalSpan.textContent = total.toFixed(2);
  if (cartCount) cartCount.textContent = count;
}

// Toggle cart drawer
function toggleCart() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;

  isDrawerOpen = !isDrawerOpen;
  drawer.classList.toggle("translate-x-full", !isDrawerOpen);
  drawer.classList.toggle("translate-x-0", isDrawerOpen);
  document.body.classList.toggle("drawer-open", isDrawerOpen);
}

// Checkout handler
function checkout() {
  alert("Redirecting to payment... (Integrate Stripe or PayPal here)");
  cart = [];
  saveCart();
  renderCart();
  toggleCart();
}

// Scroll to cart summary
function goToCheckout() {
  const summary = document.querySelector(".cart-summary");
  if (summary) summary.scrollIntoView({ behavior: 'smooth' });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});