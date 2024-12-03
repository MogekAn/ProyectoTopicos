// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // o tu host si no es local
  user: 'root',       // tu usuario de MySQL
  password: '',       // tu contraseña de MySQL
  database: 'radarapp' // nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
