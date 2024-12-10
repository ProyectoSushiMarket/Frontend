import { Router } from "express";
import { canasta, login, perfilproveedor, principal, principalcliente, vistaclienteproveedor } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/", login);
rutaprincipal.get("/principalproveedor", principal)
rutaprincipal.get("/perfilproveedor", perfilproveedor )
rutaprincipal.get("/principalcliente", principalcliente)
rutaprincipal.get("/canasta", canasta)
rutaprincipal.get("/vistaclienteproveedor", vistaclienteproveedor)


export default rutaprincipal;