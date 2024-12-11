export const login = (req, res) => {
    res.render("views.login.ejs");
};
export const principal = (req, res) => {
    res.render("views.principalproveedor.ejs")
}
export const principalcliente = (req, res) => {
    res.render("views.principalcliente.ejs")
}
export const pedidos = (req, res) => {
    res.render("views.pedidos.ejs")
}
export const vistaclienteproveedor = (req, res) => {
    res.render("views.vistaclienteproveedor.ejs")
}