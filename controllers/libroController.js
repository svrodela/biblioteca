const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');

// obtener todos los libros
router.get('/libros', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: 'Error de servidor' });
  }
});

module.exports = router;