const express = require("express");
const { dbConection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

// Crear el servidor de Expresss
const app = express();

// Base de datos
dbConection();

// CORS
app.use(cors());

// Directorio Publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
