let cart = [];
let totalPrice = 0;
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

function addToCart(name, price) {
  // Add item to cart array
  cart.push({ name, price });
  totalPrice += price;

  // Update cart display
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceDisplay = document.getElementById("total-price");

  // Clear the current display
  cartItemsContainer.innerHTML = "";

  // Populate cart with items
  cart.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItemsContainer.appendChild(cartItem);
  });

  // Update total price
  totalPriceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
  // Remove item from cart array and update total price
  totalPrice -= cart[index].price;
  cart.splice(index, 1);

  // Update cart display
  updateCartDisplay();
}

function clearCart() {
  // Clear cart array and reset total price
  cart = [];
  totalPrice = 0;

  // Update cart display
  updateCartDisplay();
}
function openCart() {
  document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("cartModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};
// Add event listener to each button to increase cart count
let itemCount = 0;
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        itemCount++;
        cartCount.textContent = itemCount;
        alert('Item added to cart!');
    });
  })
