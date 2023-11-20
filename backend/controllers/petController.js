// backend/controllers/petController.js
const db = require('../config/db');

const petController = {
    getAllPets: async (req, res) => {
      try {
        const [rows, fields] = await db.execute('SELECT * FROM mascotas');
        res.json(rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las mascotas');
      }
    },

  // Agregar una nueva mascota
  addPet: async (req, res) => {
    const { nombre, tipo, coordenadas } = req.body;

    // Verificar que se proporcionaron todos los datos necesarios
    if (!nombre || !tipo || !coordenadas) {
      return res.status(400).json({ error: 'Se requieren nombre, tipo y coordenadas para agregar una mascota' });
    }

    try {
      // Insertar la nueva mascota en la base de datos
      await db.execute('INSERT INTO mascotas (nombre, tipo, coordenadas) VALUES (?, ?, ?)', [nombre, tipo, coordenadas]);
      res.status(201).json({ message: 'Mascota agregada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al agregar la mascota');
    }
  },

  // Actualizar información de una mascota
  updatePet: async (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, coordenadas } = req.body;

    try {
      // Actualizar la mascota en la base de datos
      await db.execute('UPDATE mascotas SET nombre=?, tipo=?, coordenadas=? WHERE id=?', [nombre, tipo, coordenadas, id]);
      res.json({ message: 'Mascota actualizada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al actualizar la mascota');
    }
  },

  // Eliminar una mascota
  deletePet: async (req, res) => {
    const { id } = req.params;

    try {
      // Eliminar la mascota de la base de datos
      await db.execute('DELETE FROM mascotas WHERE id=?', [id]);
      res.json({ message: 'Mascota eliminada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar la mascota');
    }
  },
};

module.exports = petController;
