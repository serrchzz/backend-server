//Requires
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();

//Conecxión a la base de datos
// mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (Err, res) => {

//     if (err) throw err;

//     console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
// })

mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // Conectado
    console.log("Base de datos: \x1b[32m%s\x1b[0m", " online")
});
// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

// Escuchar peticiones
app.listen(3000, () => {

    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})