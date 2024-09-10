const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/biblioteca';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error conectando a MongoDB:', error);
  });