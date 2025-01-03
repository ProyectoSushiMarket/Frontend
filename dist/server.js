import express from "express";
import { fileURLToPath } from 'url';
import path from "path";
import cors from 'cors';
import ejs from "ejs";
import { config } from "dotenv";
import ruta from "./routes/index.js";
config();

const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, 'views'));

// Configuración de CORS
server.use(cors({
  origin: ['https://www.siembrafresca.com', "https://api.siembrafresca.com"], 
  methods: ['GET', 'POST', 'OPTIONS'],  
  allowedHeaders: ['Content-Type', 'Authorization'],  
}));

// Responder correctamente a las solicitudes OPTIONS (preflight requests)
server.options('*', cors());

server.use("/", ruta);

server.set("port", process.env.PORT || 3000);

export default server;
