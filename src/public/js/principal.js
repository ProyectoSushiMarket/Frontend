// Función para filtrar los productos en tiempo real
function filterProductsRealtime() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card'); 
  let found = false;

  productCards.forEach(card => {
      const productName = card.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(searchInput)) {
          card.style.display = 'block';
          found = true;
      } else {
          card.style.display = 'none';
      }
  });

  // Mostrar mensaje si no se encuentran resultados
  if (!found) {
      const noResultsMessage = document.getElementById('noResults');
      if (!noResultsMessage) {
          const message = document.createElement('p');
          message.id = 'noResults';
          message.textContent = 'No se encontraron productos';
          message.style.textAlign = 'center';
          document.querySelector('.products-grid').appendChild(message);
      }
  } else {
      const noResultsMessage = document.getElementById('noResults');
      if (noResultsMessage) noResultsMessage.remove();
  }
}

// Agregar evento en tiempo real a la barra de búsqueda
document.getElementById('searchBar').addEventListener('input', filterProductsRealtime);

// contador carrito
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(cartIcon => {
    cartIcon.addEventListener('click', (event) => {
        // Obtener el nombre del producto
        const productName = event.target.closest('.product-card').querySelector('.product-name').textContent;

        alert(`Has agregado "${productName}" al carrito.`);

        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;

        // aqui se puede poner mas adelante para agregar productos mediante el backend
    });
});

document.querySelector('.cart-icon').addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que la página recargue si el ícono tiene un enlace
    alert(`Tienes ${cartCount} productos en tu carrito.`);
});



// Funcion de alerta para Cerrar Sesion
function CerrarSesion() {
    Swal.fire({
      title: "¿Quieres Cerrar Sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión Cerrada con Éxito",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "/";
        });
      }
    });
  }
