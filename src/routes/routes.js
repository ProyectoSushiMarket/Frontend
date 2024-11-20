import { Router } from "express";
import { contactanos, login, perfilproveedor, principal } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/login", login);
rutaprincipal.get("/principalproveedor", principal)
rutaprincipal.get("/contactanos", contactanos)
rutaprincipal.get("/perfilproveedor", perfilproveedor )


export default rutaprincipal;