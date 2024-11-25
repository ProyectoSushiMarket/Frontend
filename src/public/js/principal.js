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


// carrito de compras ------------------------------// -------------------------------------

// contador carrito
let cartCount = 0;

let cartItems = [];

document.querySelectorAll('.add-to-cart').forEach(cartIcon => {
    cartIcon.addEventListener('click', (event) => {
        // Obtener el nombre del producto
        const productCard = event.target.closest('.product-card').querySelector('.product-name').textContent;
        const productName = productCard.querySelector('h3').textContent;

        Swal.fire({
          title: "Producto agregado",
          text: `"${productName}" se agregó al carrito.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false
      });

        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;

        cartItems.push(productName);

        renderCartItems();
    });
});

// Función para renderizar los productos en el carrito
function renderCartItems() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = ""; // Limpiar la lista del carrito

  cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      cartList.appendChild(listItem);
  });
}

document.querySelector('.cart-icon').addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que la página recargue si el ícono tiene un enlace
    let timerInterval;
Swal.fire({
  title: `Tienes ${cartCount} productos en tu carrito.`,
  html: "Se ve cerrar en: <b></b> Milisegundos.",
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
});

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


// Modal
function abrirModal() {
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  // Ocultar el modal
  document.getElementById('modal').style.display = 'none';

  // Limpiar los campos
  document.getElementById('product-name').value = '';
  document.getElementById('product-image').value = '';
  document.getElementById('file-name').textContent = 'Ningún archivo seleccionado';
}

// Mostrar nombre del archivo seleccionado
function mostrarNombreArchivo() {
  const fileInput = document.getElementById('product-image');
  const fileNameDisplay = document.getElementById('file-name');
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = fileInput.files[0].name;
  } else {
    fileNameDisplay.textContent = 'Ningún archivo seleccionado';
  }
}

// Guardar cambios con validación
function guardarCambios() {
  const productName = document.getElementById('product-name').value.trim();
  const productImage = document.getElementById('product-image').files[0];

  if (!productName || !productImage) {
    Swal.fire({
      icon: "warning",
      title: "Campos incompletos",
      text: "Por favor, llena todos los campos antes de guardar.",
      confirmButtonText: "Aceptar",
    });
    return;
  }

  // Puesta de productos con el backend en esta parte
  Swal.fire({
    icon: "success",
    title: "¡Producto agregado con éxito!",
    text: `El producto "${productName}" fue agregado.`,
    showConfirmButton: false,
    timer: 1500,
  });

  // Limpiar campos después de guardar
  document.getElementById('product-name').value = '';
  document.getElementById('product-image').value = '';
  document.getElementById('file-name').textContent = 'Ningún archivo seleccionado';

  cerrarModal();
}





