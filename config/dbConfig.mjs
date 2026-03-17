import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

export async function connectDB() {
    try {
        // Esta cadena de conexión NO ME FUNCIONA - Solicitar revisión de la ruta
        //await mongoose.connect ('mongodb+srv://Grupo-02:grupo02@cursadanodejs.ls9ii.mongodb.net/Node-js');

        //Esta es la que me funciona (utilizada en el TP 2)
        await mongoose.connect ('mongodb+srv://grupo-02:grupo-02@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log ('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error ('Error al conectar a MongoDB', error);
        process.exit(1);
    }
}