export const login = (req, res) => {
    res.render("views.login.ejs");
};
export const principal = (req, res) => {
    res.render("views.principalproveedor.ejs")
}
export const perfilproveedor = (req, res) => {
    res.render("views.perfilproveedor.ejs")
}
export const principalcliente = (req, res) => {
    res.render("views.principalcliente.ejs")
}
export const canasta = (req, res) => {
    res.render("views.canasta.ejs")
}
export const vistaclienteproveedor = (req, res) => {
    res.render("views.vistaclienteproveedor.ejs")
}