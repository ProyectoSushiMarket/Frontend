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



function abrirModal() {
    document.getElementById('modal').style.display = 'flex';
  }

  function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
  }

//   function confirmarEliminar() {
//     if (confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.")) {
//       window.location.href = "/eliminar-cuenta";
//     }
//   }

  function guardarCambios() {
    Swal.fire({
        icon: "success",
        title: "¡Informacion Guarda con Exito!",
        showConfirmButton: false,
        timer: 1500
      });
    cerrarModal();
  }

