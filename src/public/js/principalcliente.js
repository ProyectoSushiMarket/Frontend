// Función para filtrar productos según búsqueda
function buscarProductos() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Cargar productos al cargar la página
document.addEventListener("DOMContentLoaded", cargarProductos);

// Añadir el evento de búsqueda en tiempo real
document.getElementById("searchBar").addEventListener("input", buscarProductos);