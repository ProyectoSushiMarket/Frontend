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

  // Cerrar Sesion ------------------------------ // -----------------------------

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

  // modal ------------------------------- // --------------------------------

// Modal y elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("modalCloseBtn");
const addProductButton = document.getElementById("addProductButton");

// Imágenes de los productos
const images = document.querySelectorAll(".product-image img");

// Elementos del carrito
const cartCount = document.getElementById("cart-count");
const cartDetails = document.getElementById("cart-details");
const cartItemsList = document.getElementById("cart-items-list");

// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    return now.toLocaleString('es-ES', options); // Formato en español
}

// Función para actualizar la fecha y hora dentro del modal
function updateModalDateTime() {
    const dateTimeElement = document.getElementById("current-time");
    dateTimeElement.textContent = "Fecha y Hora Actual: " + getCurrentDateTime();
}

// Evento para mostrar el modal
images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.alt; // Texto basado en 'alt' de la imagen
        updateModalDateTime(); // Actualizar la fecha y hora al abrir el modal
    });
});

// Evento para cerrar el modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Función para mostrar notificación de éxito
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Función para actualizar el carrito
function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;

    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - Cantidad: ${item.quantity} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);
    });
}

// Prevenir envío del formulario
const form = document.getElementById("productForm");
form.addEventListener("submit", (e) => e.preventDefault());

// Evento del botón "Añadir Producto"
addProductButton.addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    const productName = captionText.innerText;
    const productImage = modalImg.src;
    const productPrice = 5; // Precio fijo, modifícalo si es necesario

    if (!quantity || isNaN(quantity) || quantity <= 0) {
        showNotification("Por favor, introduce una cantidad válida.");
        return;
    }

    const product = {
        product: productName,
        quantity: parseInt(quantity),
        price: productPrice,
        image: productImage // Incluye la imagen si es necesaria
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();

    showNotification("Producto añadido con éxito al carrito");
    modal.style.display = "none";
});

// Actualizar la fecha y hora en tiempo real cada segundo
setInterval(updateModalDateTime, 1000);

// Mostrar detalles del carrito al hacer hover
cartCount.addEventListener("mouseenter", () => {
    cartDetails.style.display = "block";
});

cartDetails.addEventListener("mouseleave", () => {
    cartDetails.style.display = "none";
});

// Cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', updateCart);











