const express = require('express');
const mongoose = require('mongoose');
const cursoRoutes = require('./routes/cursoRoutes');
const clasesParticulares = require("./routes/claseParticularRoutes")
const alumnosInscriptos = require("./routes/alumnoInscriptoRoutes")
const usuarios = require("./routes/usuarioRoutes")

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;


// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
const db = mongoose.connection;

console.log(process.env.MONGODB_URI);
//const CONNECTION_URL = 
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});


app.use(express.json());

app.use("/api/cursos",cursoRoutes);
app.use("/api/clasesParticulares",clasesParticulares);
app.use("/api/alumnosInscriptos", alumnosInscriptos);
app.use("/api/usuarios", usuarios);


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});


