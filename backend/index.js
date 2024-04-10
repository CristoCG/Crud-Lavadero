import express from "express";
import authRouter from "./routes/auth.route.js"
import "dotenv/config"
import "./database/connectBD.js"

//Inicializar express
const app = express();


//Middleware
app.use(express.json())
app.use("/api/v1",authRouter)

//Puerto e inicialización
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor inicializado en el puerto ${PORT}`))
