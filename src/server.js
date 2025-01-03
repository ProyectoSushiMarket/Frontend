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
    origin: ["https://api.siembrafresca.com", "https://www.siembrafresca.com"], 
    methods: ['GET', 'POST', 'OPTIONS'],  
    allowedHeaders: ['Content-Type', 'Authorization'],  
    credentials: true,  // Si estás enviando cookies o credenciales
  }));
  server.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      return res.status(204).end();
    }
    next();
  });
  

// Responder correctamente a las solicitudes OPTIONS (preflight requests)
server.options('*', cors());

server.use("/", ruta);

server.set("port", process.env.PORT || 3000);

export default server;
