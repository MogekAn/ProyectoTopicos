const { Sequelize } = require('sequelize');

// Conexión a la base de datos
const sequelize = new Sequelize('radarapp', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
