import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Conexión exitosa a la base de datos.")
    
} catch (error) {

    console.log("Conexión fallida a la base de datos. Error: " + error)
    
}