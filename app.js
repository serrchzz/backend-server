// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    //mongoose.connection.openUri('mongodb://45.55.39.196:3000/hospitalDB', (err, res) => {


    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));



// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);

app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});

// // Requires
// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');


// // Inicializar variables
// var app = express();


// // Body Parser
// //=============================================================================
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


// // Importar rutas
// var appRoutes = require('./routes/app');
// var usuarioRoutes = require('./routes/usuario');
// var loginRoutes = require('./routes/login');
// var hospitalRoutes = require('./routes/hospital');
// var medicoRoutes = require('./routes/medico');
// var busquedaRoutes = require('./routes/busqueda');
// var uploadRoutes = require('./routes/upload');
// var imagenesRoutes = require('./routes/imagenes');


// // Conexión a la base de datos
// mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

//     if (err) throw err;

//     console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

//     mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true });
//     var db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//         // Conectado
//         console.log("Base de datos: \x1b[32m%s\x1b[0m", " online");
//     });

//     // Server index config
//     // var serveIndex = require('serve-index');
//     // app.use(express.static(__dirname + '/'))
//     // app.use('/uploads', serveIndex(__dirname + '/uploads'));



//     // Rutas
//     app.use('/usuario', usuarioRoutes);
//     app.use('/hospital', hospitalRoutes);
//     app.use('/medico', medicoRoutes);
//     app.use('/login', loginRoutes);
//     app.use('/busqueda', busquedaRoutes);
//     app.use('/upload', uploadRoutes);
//     app.use('/img', imagenesRoutes);

//     app.use('/', appRoutes);


//     // Escuchar peticiones
//     app.listen(3000, () => {
//         console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
//     });
// });