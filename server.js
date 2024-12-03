// server.js
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/api/users', (req, res) => {
  db.query('SELECT id, name, email FROM Users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching users' });
    }
    res.json(results);
  });
});

// Ruta para obtener todos los eventos
app.get('/api/events', (req, res) => {
  db.query('SELECT id, name, category, image FROM Events', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching events' });
    }
    res.json(results);
  });
});

// Ruta para obtener los eventos favoritos de un usuario
app.get('/api/users/:userId/favorites', (req, res) => {
  const userId = req.params.userId;
  db.query(`
    SELECT e.name, e.category, e.image 
    FROM Events e
    JOIN UserFavoriteEvents ufe ON e.id = ufe.event_id
    WHERE ufe.user_id = ?`, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching favorite events' });
    }
    res.json(results);
  });
});

// Iniciar el servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
