const express = require('express');
const mysql = require('mysql2'); // O el cliente para tu base de datos
const app = express();
const port = 5000;

// Configurar la conexión a la base de datos (ajusta estos parámetros)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Cambia por la contraseña de tu base de datos
  database: 'radarapp',
});

// Conectar con la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

// Endpoint para obtener los eventos guardados de un usuario
app.get('/api/usersavedevents', async (req, res) => {
  const { user_id } = req.query; // Obtén el user_id desde los parámetros de la query
  if (!user_id) {
    return res.status(400).json({ error: 'Falta el user_id' });
  }

  try {
    // Consulta a la base de datos para obtener los eventos guardados por el usuario
    const [eventos] = await db.promise().query('SELECT * FROM usersavedevents WHERE user_id = ?', [user_id]);
    res.json(eventos); // Envía los eventos como respuesta en formato JSON
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
    res.status(500).json({ error: 'Error al obtener los eventos' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
