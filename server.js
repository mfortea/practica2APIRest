const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js')

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/concesionario", { useNewUrlParser: true })
.then( db => console.log("Conexión a BD correcta") )
.catch( error => console.log("Error al conectarse a la BD" + error));

app.use(express.json()); 
app.use('/concesionario', apiRoutes);

app.listen(3000);
