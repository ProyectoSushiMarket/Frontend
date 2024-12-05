// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const showLogin = document.getElementById("show-login");
  const showRegister = document.getElementById("show-register");
  const loginButton = document.getElementById("login-button");

  // Mostrar formulario de registro
  if (showRegister) {
    showRegister.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
    });
  }

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
});

// Función para iniciar sesión
const login = async () => {
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");

  
  if (!usuarioInput || !contrasenaInput) {
    console.error("Los elementos de entrada no se encontraron en el DOM.");
    return;
  }

  const usuario = usuarioInput.value;
  const contrasena = contrasenaInput.value;

  // Validación de campos obligatorios
  if (!usuario || !contrasena) {
    alertify.error("Por favor, complete todos los campos.");
    return;
  }

  sessionStorage.setItem("urltiendaverduras", "http://localhost:4100");
  const urltiendaverduras = sessionStorage.getItem("urltiendaverduras") + "/login/loginusuario";

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
      // Sesión exitosa
      sessionStorage.setItem("token", data.body.token);
      sessionStorage.setItem("rol", data.body.rol);
      window.location.href = sessionStorage.getItem("rol");
    } else {
      // Error en la autenticación
      alertify.error("Contrasena Incorrecta");
    }
  } catch (err) {
    console.error("Se presentó un problema:", err);
    alertify.error("Error al comunicarse con el servidor.");
  }
};
