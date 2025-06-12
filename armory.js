let cart = [];

function updateCartDisplay() {
  const cartElement = document.getElementById('cart');
  cartElement.textContent = `Cart (${cart.length})`;
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      const id = product.dataset.id;
      const name = product.dataset.name;
      const price = parseFloat(product.dataset.price);

      cart.push({ id, name, price });
      updateCartDisplay();
      alert(`${name} added to cart!`);
    });
  });
});
