//Requires
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();

// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

//Conecxión a la base de datos

mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // Conectado
    console.log("Base de datos: \x1b[32m%s\x1b[0m", " online");
});

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {

    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});