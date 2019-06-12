var express = require('express');

var app = express();

const path = require('path');
var fs = require('fs');


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var pathImagen = path.resolve(_dirname, '../uploads/${ tipo }/${ img }');

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        var pathNoImagen = path.resolve(_dirname, '../assets/no-image.jpg');
        res.sendFile(pathNoImagen);
    }

});

module.exports = app;