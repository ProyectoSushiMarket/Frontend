document.addEventListener("DOMContentLoaded", () => {
    const inputBusqueda = document.querySelector("#searchInput");

    // Función de búsqueda en tiempo real
    function buscarClientes() {
        const filtro = inputBusqueda.value.toLowerCase();
        const filas = document.querySelectorAll("#clientesTabla tbody tr");

        filas.forEach(fila => {
            const textoFila = fila.textContent.toLowerCase();
            fila.style.display = textoFila.includes(filtro) ? "" : "none";
        });
    }

    
    inputBusqueda.addEventListener("input", buscarClientes);
});
