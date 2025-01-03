// DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const showLogin = document.getElementById("show-login");
  const loginButton = document.getElementById("login-button");
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");

  // Mostrar formulario de login
  if (showLogin) {
    showLogin.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  }

  // Botón de login
  if (loginButton) {
    loginButton.addEventListener("click", login);
  }

  // Escuchar el evento keydown en los inputs para habilitar Enter
  if (usuarioInput && contrasenaInput) {
    [usuarioInput, contrasenaInput].forEach(input => {
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          login();
        }
      });
    });
  }
});

// Función para iniciar sesión
const login = async () => {
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");

  if (!usuarioInput || !contrasenaInput) {
    console.error("Los elementos de entrada no se encontraron en el DOM.");
    return;
  }

  const usuario = usuarioInput.value.trim();
  const contrasena = contrasenaInput.value.trim();

  if (!usuario || !contrasena) {
    let timerInterval;
    Swal.fire({
      title: "Por favor complete todos los campos",
      html: "<b></b> milliseconds.",
      timer: 1500,
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
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    return;
  }

  // Cambia la URL base por la URL del dominio
  sessionStorage.setItem("urltiendaverduras", "www.siembrafresca.com");

  const urltiendaverduras =
    sessionStorage.getItem("urltiendaverduras") + "/login/loginusuario";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, contrasena }),
  };

  try {
    const response = await fetch(urltiendaverduras, options);
    const data = await response.json();

    if (response.ok && data.body) {
      sessionStorage.setItem("token", data.body.token);
      sessionStorage.setItem("rol", data.body.rol);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      });


      setTimeout(() => {
        window.location.href = sessionStorage.getItem("rol");
      }, 1500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña Incorrecta. :(",
        footer: '<a href="https://wa.me/573006348274?" target="_blank">Comunicate con Soporte</a>'
      });
    }
  } catch (err) {
    console.error("Se presentó un problema:", err);
    alertify.error("Error al comunicarse con el servidor.");
  }
};
