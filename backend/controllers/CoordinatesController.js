// En controllers/CoordinatesController.js
const User = require('../models/UserModel');
const Coordinates = require('../models/CoordinatesModel');

exports.saveCoordinates = async (uid, latitude, longitude) => {
  try {
    // Encuentra al usuario por su UID
    const user = await User.findOne({ where: { uid } });

    // Crea un registro de coordenadas asociado a ese usuario
    await Coordinates.create({
      latitude,
      longitude,
      userId: user.id,
    });

    return { success: true };
  } catch (error) {
    console.error('Error al guardar coordenadas:', error);
    return { success: false, error: error.message };
  }
};
