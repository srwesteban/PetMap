// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
// Agrega más rutas según tus necesidades de autenticación

module.exports = router;
