
export const principalproveedor = (req, res) => {
    let datos = {}
    fetch("http://localhost:4100")
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