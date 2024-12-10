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







