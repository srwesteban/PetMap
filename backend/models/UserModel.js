// En models/UserModel.js
const db = require('../config/database');
const { DataTypes } = require('sequelize');

const User = db.define('User', {
  uid: {
    type: DataTypes.STRING, // Tipo de dato para almacenar el UID de Firebase
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Otros campos de usuario si es necesario
});
// En models/UserModel.js (actualizado)
const Coordinates = require('./CoordinatesModel');

User.hasMany(Coordinates, { as: 'coordinates', foreignKey: 'userId' });


module.exports = User;