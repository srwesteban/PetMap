// backend/routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/getAllPets', petController.getAllPets);

// Agrega más rutas de mascotas según tus necesidades

module.exports = router;
