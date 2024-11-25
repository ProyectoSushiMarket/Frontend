import { Router } from "express";
import { canasta, contactanos, login, perfilproveedor, principal, principalcliente } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/", login);
rutaprincipal.get("/principalproveedor", principal)
rutaprincipal.get("/contactanos", contactanos)
rutaprincipal.get("/perfilproveedor", perfilproveedor )
rutaprincipal.get("/principalcliente", principalcliente)
rutaprincipal.get("/canasta", canasta)


export default rutaprincipal;