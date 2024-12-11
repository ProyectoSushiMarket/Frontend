document.addEventListener("DOMContentLoaded", () => {
    const inputBusqueda = document.querySelector("#searchInput");
    const tablaClientes = document.querySelector("#clientesTabla tbody");
    const mensajeNoClientes = document.createElement("tr");

    // Función de búsqueda en tiempo real
    function buscarClientes() {
        const filtro = inputBusqueda.value.toLowerCase();
        const filas = document.querySelectorAll("#clientesTabla tbody tr");

        let resultadosEncontrados = false;

        filas.forEach(fila => {
            const textoFila = fila.textContent.toLowerCase();
            if (textoFila.includes(filtro)) {
                fila.style.display = ""; 
                resultadosEncontrados = true;
            } else {
                fila.style.display = "none"; 
            }
        });

        
        if (!resultadosEncontrados) {
            
            if (!document.querySelector("#mensajeNoClientes")) {
                mensajeNoClientes.id = "mensajeNoClientes";
                mensajeNoClientes.innerHTML = "<td colspan='5' style='text-align: center;'>No hay clientes encontrados con esa identificación</td>";
                tablaClientes.appendChild(mensajeNoClientes);
            }
        } else {
            
            const mensaje = document.querySelector("#mensajeNoClientes");
            if (mensaje) {
                mensaje.remove();
            }
        }
    }

    inputBusqueda.addEventListener("input", buscarClientes);
});

