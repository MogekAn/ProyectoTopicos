// src/services/api.js
import axios from 'axios';

// Configuración de la instancia de Axios
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Asegúrate de que este es el URL correcto
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
