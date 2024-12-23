import { Router } from "express";
import { pedidos, login, principal, principalcliente, vistaclienteproveedor } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/", login);
rutaprincipal.get("/proveedor", principal)
rutaprincipal.get("/cliente", principalcliente)
rutaprincipal.get("/pedidos", pedidos)
rutaprincipal.get("/vistaclienteproveedor", vistaclienteproveedor)


export default rutaprincipal;