// Muestra los productos en el carrito
function mostrarProductos() {
  const productList = document.getElementById("product-list");
  const emptyCart = document.getElementById("empty-cart");
  const cartCount = document.getElementById("cart-count");
  
  // Recuperar productos desde el localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Si hay productos, mostrar lista
  if (cart.length > 0) {
    emptyCart.style.display = "none";
    productList.style.display = "block";
    productList.innerHTML = ""; // Limpiar contenido previo

    cart.forEach(product => {
      const item = document.createElement("div");
      item.className = "product-item";
      item.innerHTML = `
        <img src="${product.image}" alt="${product.product}" class="product-image">
        <p>${product.product} - $${product.price} x ${product.quantity}</p>
      `;
      productList.appendChild(item);
    });

    // Actualizar contador
    cartCount.textContent = cart.length;
  } else {
    emptyCart.style.display = "block";
    productList.style.display = "none";
    cartCount.textContent = 0;
  }
}

// Ejecutar al cargar
window.onload = mostrarProductos;
