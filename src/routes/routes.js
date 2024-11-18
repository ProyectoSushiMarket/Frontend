import { Router } from "express";
import { login, principal } from "../controllers/controller.login.js";

const rutaprincipal = Router();

rutaprincipal.get("/", login);
rutaprincipal.get("/principalproveedor", principal)


export default rutaprincipal;