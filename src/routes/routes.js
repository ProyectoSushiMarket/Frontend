import { Router } from "express";
import { pedidos, login, principal, principalcliente, vistaclienteproveedor } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/", login);
rutaprincipal.get("/principalproveedor", principal)
rutaprincipal.get("/principalcliente", principalcliente)
rutaprincipal.get("/pedidos", pedidos)
rutaprincipal.get("/vistaclienteproveedor", vistaclienteproveedor)


export default rutaprincipal;