import { Router } from "express";
import { contactanos, login, principal } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/", login);
rutaprincipal.get("/principalproveedor", principal)
rutaprincipal.get("/contactanos", contactanos)


export default rutaprincipal;