// En models/CoordinatesModel.js
const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Coordinates = db.define('Coordinates', {
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Otros campos relacionados con las coordenadas
});
// En models/CoordinatesModel.js (actualizado)
const User = require('./UserModel');

Coordinates.belongsTo(User, { foreignKey: 'userId' });

module.exports = Coordinates;
