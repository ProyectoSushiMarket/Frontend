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
          window.location.href = "/login";
        });
      }
    });
  }
