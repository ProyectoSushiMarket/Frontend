import { Router } from "express";
import rutaprincipal from "./routes.js";


const ruta = Router();

ruta.use("/", rutaprincipal);

export default ruta;