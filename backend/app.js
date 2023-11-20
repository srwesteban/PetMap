// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Cargar variables de entorno

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// Configuración de MySQL
const mysql = require('mysql2');
const db = mysql.createPool(dbConfig).promise();

// Rutas
const authRoutes = require('./routes/authRoutes');
const mapRoutes = require('./routes/mapRoutes');
const petRoutes = require('./routes/petRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/map', mapRoutes);
app.use('/api/pet', petRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
