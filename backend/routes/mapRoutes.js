// backend/routes/mapRoutes.js
const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

router.get('/getCoordinates', mapController.getCoordinates);
// Agrega más rutas del mapa según tus necesidades

module.exports = router;
