const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;


// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
const db = mongoose.connection;


//const CONNECTION_URL = 
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});


app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});