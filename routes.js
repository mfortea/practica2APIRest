const controller = require('./controllers');
const express = require("express");

const router = express.Router();

// Rutas para los coches

router.get("/coches", controller.listarCoches );  

router.get("/coches/:id", controller.readCoche ) ;      

router.delete("/coches/:id", controller.deleteCoche);   

router.put("/coches/:id", controller.updateCoche);      

router.post("/coches", controller.createCoche);       


// Rutas para los clientes

router.get("/clientes", controller.listarClientes );        

router.get("/clientes/:id", controller.readCliente) ;       

router.delete("/clientes/:id", controller.deleteCliente);   

router.put("/clientes/:id", controller.updateCliente);      

router.post("/clientes", controller.createCliente);      


module.exports = router;