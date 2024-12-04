import React, { useState, useEffect } from 'react';
import API from '../services/api';  // Importar la instancia de Axios

const Users = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar los datos de usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Llamada a la API para obtener usuarios
    API.get('/users')
      .then(response => {
        setUsers(response.data); // Guardamos los datos recibidos en el estado
        setLoading(false); // Detenemos la carga
      })
      .catch(error => {
        console.error('Error fetching users:', error); // Manejo de errores
        setError('Error fetching users');
        setLoading(false); // Detenemos la carga incluso si hay error
      });
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
