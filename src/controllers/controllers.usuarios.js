
export const principalproveedor = (req, res) => {
    let datos = {}
    fetch("http://localhost:4000")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.principalproveedor.ejs", {
            usuario: datos.usuarios,
            productos: datos.productos,
            pedidos: datos.pedidos
        })
    })
}