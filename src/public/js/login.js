document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showLogin = document.getElementById("show-login");
    const showRegister = document.getElementById("show-register");

    // Mostrar formulario de registro
    showRegister.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
    });

    // Mostrar formulario de login
    showLogin.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  });